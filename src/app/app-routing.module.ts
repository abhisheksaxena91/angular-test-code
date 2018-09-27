import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'loyalitypartner',
    loadChildren: './loyalitypartner/loyalitypartner.module#LoyalitypartnerModule'
  },
  {
    path: 'marketthemequestion',
    loadChildren: './marketthemequestion/marketthemequestion.module#MarketthemequestionModule'
  },
  {
    path: 'stockscore',
    loadChildren: './stockscore/stockscore.module#StockscoreModule'
  },
  {
    path: 'performancerating',
    loadChildren: './performancerating/performancerating.module#PerformanceratingModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preload all modules; optionally we could
    // implement a custom preloading strategy for just some
    // of the modules (PRs welcome 😉)

  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
