import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoyalitypartnerComponent } from './loyalitypartner.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: LoyalitypartnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
  declarations: [LoyalitypartnerComponent]
})
export class LoyalitypartnerModule { }
