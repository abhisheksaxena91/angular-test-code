import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockCoverageComponent } from './stockcoverage.component';
import {StockCoverageListComponent} from './StockCoverageList/stockcoveragelist.component';


const routes: Routes = [
  {
    path: 'stockCoverageQuestion',
    component: StockCoverageComponent
  },
  {
    path: 'stockCoverageList',
    component: StockCoverageListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockCoverageRoutingModule {}
