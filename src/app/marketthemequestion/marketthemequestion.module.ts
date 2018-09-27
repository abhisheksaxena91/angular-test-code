import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketthemequestionComponent } from './marketthemequestion.component';
import { RouterModule, Routes } from '@angular/router'
const routes: Routes = [
  {
    path: '',
    component: MarketthemequestionComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
  declarations: [MarketthemequestionComponent]
})
export class MarketthemequestionModule { }
