import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Errors, StockCoverageService, JwtService } from '../../core';
import { EventsService } from 'angular4-events';


@Component({
  selector: 'app-stockcoverage-page',
  templateUrl: './stockcoveragelist.component.html',
  styleUrls: ['./stockcoveragelist.scss']
})
export class StockCoverageListComponent implements OnInit {

  public showDialog: boolean;
  public setFilters: any = {};
  public stockstatusList: any;
  public stockstatusAllList: any;
  public surveyId: any;
  public totalPages: Number;
  public currentPagenumber: number;
  public limit: number;
  arrayOne(n: number): any[] {
    return Array(n);
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private stockcoverageService: StockCoverageService,
    private jwtService: JwtService,
    private pubsub: EventsService
  ) {
    this.showDialog = false;
    this.limit = 25;
    this.pubsub.subscribe('stockCoverageAutoPopulate').subscribe((from) => {
      this.stockstatusAllList = this.stockcoverageService.getAutoPopulateData();
      if (this.currentPagenumber === undefined) {
        this.currentPagenumber = 1;
        this.setPage(this.currentPagenumber);
      } else {
        this.totalPages = 1;
        this.setPage(this.currentPagenumber);
      }
  });
  }

  ngOnInit() {

    this.stockcoverageService.getSurveyDetails().subscribe((res: any) => {
      this.surveyId            = res.data[0]._id;
      this.setFilters.surveyId = res.data[0]._id;
      this.setFilters.sector   =  res.data[0].sector;
      this.setFilters.indices  = res.data[0].indices;
      this.setFilters.buySell  = res.data[0].buySellFilter;
      this.setFilters.removeCompanyCode = res.data[0].removeCompanyCode;
      this.setFilters.addCompanyCode = res.data[0].addCompanyCode;
      this.setFilters.step     =  res.data[0].step;
      this.stockcoverageService.setFilterAtStart(this.setFilters);

      this.stockcoverageService.getListStockStatus().subscribe(data => {
          this.stockstatusAllList = data.data.company;
          this.totalPages = Math.ceil(this.stockstatusAllList.length / this.limit);
          this.totalPages = this.totalPages === 0 ? 1 : this.totalPages;
          this.currentPagenumber = 1;
          this.setPage(this.currentPagenumber);
    });
    this.stockcoverageService.updateStep({step: 2, surveyId: this.surveyId}).subscribe((respose: any) => {});

   });

  }

  showDataPopUp () {
      this.showDialog = !this.showDialog;
  }

  removeCompanyCode(i) {
    const companyCode = this.stockstatusList[i].companyCode;
    this.stockstatusAllList.splice((i * this.currentPagenumber), 1);
    this.stockcoverageService.setRemoveCompanyCode(companyCode);
    this.stockstatusList = this.stockstatusAllList.slice(((this.currentPagenumber * this.limit) - this.limit), (this.currentPagenumber * this.limit));
    this.totalPages = Math.ceil(this.stockstatusAllList.length / this.limit);
    this.toastr.success('Stock removed');
  }

  submitStockStatusList() {
    const surveyData = this.stockcoverageService.getSurveydocument();
    surveyData.step = 3;
    this.stockcoverageService.saveSurveyData(this.stockcoverageService.getSurveydocument()).subscribe((stockData: any) => {
      this.router.navigate(['/stockStatus']);
    });
  }

  updateStep() {
    // const token = this.jwtService.getToken();
    // this.stockcoverageService.updateStep({step: 1, surveyId: this.surveyId}).subscribe((respose: any) => {
    //   this.router.navigate(['/stockCoverageQuestion']);
    // });
  }

  setPage(page) {
    if (page >= 1 && page <= this.totalPages) {
      console.log(this.stockstatusAllList);
      this.currentPagenumber = page;
      this.stockstatusList = this.stockstatusAllList.slice(((page * this.limit)  - this.limit), (page * this.limit));
    } else {

    }
    if (page === 0) {
        this.router.navigate(['/stockCoverageQuestion']);
      }
      if (page > this.totalPages) {
        this.submitStockStatusList();
      }

  }

}
