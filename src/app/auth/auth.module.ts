import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared';
import { AuthRoutingModule } from './auth-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { VerificationComponent } from './verification/verification.component';

@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    VerificationComponent
  ],
  providers: [

  ]
})
export class AuthModule {}
