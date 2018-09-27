import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformanceratingComponent } from './performancerating.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: PerformanceratingComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
  declarations: [PerformanceratingComponent]
})
export class PerformanceratingModule { }
