import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {WalletComponent} from './components/wallet/wallet.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'wallet', component: WalletComponent},
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
