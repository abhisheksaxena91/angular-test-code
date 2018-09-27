import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Errors, StockCoverageService } from '../core';
import { ToastrService } from 'ngx-toastr';
import { EventsService } from 'angular4-events';

@Component({
  selector: 'app-stockcoverage-page',
  templateUrl: './stockcoverage.component.html',
  styleUrls: ['./stockcoveragelist.scss']
})
export class StockCoverageComponent implements OnInit  {
  public closeSidenavSub: any;
  authType: String = '';
  title: String = '';
  errors: Errors = {errors: {}};
  authForm: FormGroup;
  public setFilters: any = {};
  public setSurveyData: any;
  public stockcoverageList: Array<any> = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private stockcoverageService: StockCoverageService,
    private toastr: ToastrService,
    private pubsub: EventsService
  ) {

  }

  ngOnInit() {
    if (this.stockcoverageService.getToastTrigger()) {
      this.toastr.success('Email verification done successfully.');
      this.stockcoverageService.unSetTostTrigger();
    } else {

    }
    this.route.params.subscribe(params => {


      this.stockcoverageService.getSurveyDetails().subscribe((res: any) => {
        this.setFilters.surveyId = res.data[0]._id;
        this.setFilters.sector =  res.data[0].sector;
        this.setFilters.indices = res.data[0].indices;
        this.setFilters.buySell = res.data[0].buySellFilter;
        this.setFilters.removeCompanyCode = [];
        this.setFilters.addCompanyCode = [];
        this.setFilters.step =  res.data[0].step;
        this.stockcoverageService.setFilterAtStart(this.setFilters);

        this.stockcoverageService.getStockCoverageList().subscribe((stockcoverage: any) => {
             this.stockcoverageList = stockcoverage.data;
        });
                 this.stockcoverageService.updateStep({step: 1, surveyId: this.setFilters.surveyId}).subscribe((response: any) => {});
      });

     });

  }

  onChangeFilter(event, filter) {

    const filterIndex = this.setFilters[filter.type].indexOf(filter._id);
        if (filterIndex > -1) {
          this.setFilters[filter.type].splice(filterIndex, 1);
        } else {
          this.setFilters[filter.type].push(filter._id);
        }
  }

  submitForm () {
    this.toastr.clear();
    if (this.setFilters.indices.length >= 1) {
    this.setFilters.step = '2';
    this.stockcoverageService.saveSurveyData(this.setFilters).subscribe((stockData: any) => {

      this.stockcoverageService.setSurveydocument(this.setFilters);
      this.stockcoverageService.setStockCoverageParam(this.setFilters);
      this.router.navigate(['/stockCoverageList']);
     });
    } else {
        this.toastr.error('Please select the indices to proceed further.');
    }
  }

//   ngOnDestroy() {
//      this.closeSidenavSub.unsubscribe();
// }

}
