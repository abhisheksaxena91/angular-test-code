import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockscoreComponent } from './stockscore.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: StockscoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
  declarations: [StockscoreComponent]
})
export class StockscoreModule { }
