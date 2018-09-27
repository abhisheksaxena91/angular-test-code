import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Errors, StockCoverageService } from '../core';

@Component({
  selector: 'app-stockstatus-page',
  templateUrl: './stockstatus.component.html',
  styleUrls: ['./stockstatus.scss']
})
export class StockStatusComponent implements OnInit {
  showDialog: boolean;
  stockstatusList: any;
  authType: String = '';
  title: String = '';
  errors: Errors = {errors: {}};
  isSubmitting = false;
  authForm: FormGroup;
  public setFilters: any = {};
  public surveyId: String;
  public stockcoverageList: Array<any> = [];
  public buySell: any;
  public totalPages: Number;
  public currentPagenumber: number;
  public stockstatusAllList: any;
  public limit: number;
  public showAction: boolean;
  public selectorIndex: Number;
  arrayOne(n: number): any[] {
    return Array(n);
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private stockcoverageService: StockCoverageService
  ) {
      this.limit = 25;
      this.showDialog = false;
      this.showAction = true;
  }

  ngOnInit() {

  this.stockcoverageService.getSurveyDetails().subscribe((res: any) => {
    this.surveyId                     = res.data[0]._id;
    this.setFilters.surveyId          = res.data[0]._id;
    this.setFilters.sector            = res.data[0].sector;
    this.setFilters.indices           = res.data[0].indices;
    this.setFilters.buySell           = res.data[0].buySellFilter;
    this.setFilters.removeCompanyCode = res.data[0].removeCompanyCode;
    this.setFilters.addCompanyCode    = res.data[0].addCompanyCode;
    this.setFilters.step              = res.data[0].step;
    this.setFilters.responses         = res.data[0].responses === undefined ? {} : res.data[0].responses;
    if (this.setFilters.buySell === 'buy') {
      this.showDialog = true;
      const inverstorValue = res.data[0].investor === undefined ? 0 : res.data[0].investor;
      this.selectValueChange(inverstorValue);
    } else {}
    this.stockcoverageService.setFilterAtStart(this.setFilters);
    this.stockcoverageService.getListStockStatus().subscribe(data => {
      this.stockstatusAllList = data.data.company;
      this.buySell            = data.data.buySell.value;
      this.stockstatusAllList = data.data.company;
      this.totalPages         = Math.ceil(this.stockstatusAllList.length / this.limit);
      this.currentPagenumber  = 1;
      this.setPage(this.currentPagenumber);
    });

    this.stockcoverageService.updateStep({step: 3, surveyId: this.setFilters.surveyId}).subscribe((response: any) => {});
 });

  }

  showDataPopUp () {
    this.showDialog = !this.showDialog;
}

  updateStep() {
    this.stockcoverageService.updateStep({step: 2, surveyId: this.surveyId}).subscribe((respose: any) => {
      this.router.navigate(['/stockCoverageList']);
    });
  }

  setPage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPagenumber = page;
      this.stockstatusList = this.stockstatusAllList.slice(((page * this.limit)  - this.limit), (page * this.limit));
    } else { }
    if (page === 0) {
      this.router.navigate(['/stockCoverageList']);
    }
    if (page > this.totalPages) {
      this.router.navigate(['/stockscore']);
    }
}

  onChange(companyId, value) {
    this.setFilters.responses[companyId] = value;
    this.stockcoverageService.setFilterAtStart(this.setFilters);
    this.stockcoverageService.saveSurveyData(this.stockcoverageService.getSurveydocument()).subscribe((stockData: any) => {});
  }

  selectValueChange(value: Number) {
    this.setFilters.investor = value;
    this.selectorIndex = value;
    if (value === 1) {
      this.showAction = false;
    }  else {
      this.showAction = true;
    }
    this.stockcoverageService.setFilterAtStart(this.setFilters);
    this.stockcoverageService.saveSurveyData(this.stockcoverageService.getSurveydocument()).subscribe((stockData: any) => {});
  }
}
