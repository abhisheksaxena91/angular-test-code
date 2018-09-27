import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StockStatusComponent } from './stockstatus.component';
import { SharedModule } from '../shared';
import { StockCoverageRoutingModule } from './stockstatus-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { InvestorComponent } from './popUp/investor.component';


@NgModule({
  imports: [
    SharedModule,
    StockCoverageRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularMultiSelectModule
  ],
  declarations: [
    StockStatusComponent,
    InvestorComponent
  ],
  providers: [

  ]
})
export class StockStatusModule {}
