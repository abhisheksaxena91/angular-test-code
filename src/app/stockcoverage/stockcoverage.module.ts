import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StockCoverageComponent } from './stockcoverage.component';
import { StockCoverageListComponent } from './StockCoverageList/stockcoveragelist.component';
import {DialogComponent} from './popUp/dialog.component';
import { SharedModule } from '../shared';
import { StockCoverageRoutingModule } from './stockcoverage-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';


@NgModule({
  imports: [
    SharedModule,
    StockCoverageRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularMultiSelectModule
  ],
  declarations: [
    StockCoverageComponent,
    StockCoverageListComponent,
    DialogComponent
  ],
  providers: [

  ]
})
export class StockCoverageModule {}
