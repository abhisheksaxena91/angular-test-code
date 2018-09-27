import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockCoverageService } from '../../core';
import { ToastrService } from 'ngx-toastr';
import { EventsService } from 'angular4-events';



@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html'
})
export class VerificationComponent implements OnInit {
  public setFilters: any = {};
  public setSurveyData: any;
  public stockcoverageList: Array<any> = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private stockcoverageService: StockCoverageService,
    private toastr: ToastrService,
    private events: EventsService
  ) {
    this.route.params.subscribe(params => {


      this.stockcoverageService.setAuth(params['key']);
      this.stockcoverageService.checkToken().subscribe((checkToken: any) => {

          if (!checkToken.error) {
            this.stockcoverageService.getSurveyDetails().subscribe((res: any) => {
              this.setFilters.surveyId = res.data[0]._id;
              this.setFilters.sector   =  res.data[0].sector;
              this.setFilters.indices  = res.data[0].indices;
              this.setFilters.buySell  = res.data[0].buySellFilter;
              this.setFilters.removeCompanyCode = [];
              this.setFilters.addCompanyCode = [];
              this.setFilters.step =  res.data[0].step;
              this.stockcoverageService.setFilterAtStart(this.setFilters);
              this.stockcoverageService.setTostTrigger();
                  this.router.navigate(['/stockCoverageQuestion']);
                  this.stockcoverageService.updateStep({step: 1, surveyId: this.setFilters.surveyId}).subscribe((response: any) => {});
            });
          } else {
                this.stockcoverageService.unSetAuth();
                this.router.navigate(['/login']);
          }
      });

     });
  }

  ngOnInit() {
  }
}
