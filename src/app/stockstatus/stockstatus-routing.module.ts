import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockStatusComponent } from './stockstatus.component';


const routes: Routes = [

  {
    path: 'stockStatus',
    component: StockStatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockCoverageRoutingModule {}
