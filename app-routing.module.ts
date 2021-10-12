import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
 
  {path:'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  {path:'about-us', loadChildren: () => import('./modules/about-us/about-us.module').then(m => m.AboutUsModule)},
  {path:'contact-us', loadChildren: () => import('./modules/contact-us/contact-us.module').then(m => m.ContactUsModule)},
  {path:'sign-in', loadChildren: () => import('./modules/sign-in/sign-in.module').then(m => m.SignInModule)},
  {path:'sign-up', loadChildren: () => import('./modules/sign-up/sign-up.module').then(m => m.SignUpModule)},
  {path:'Products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)},
  {path:'search-bar', loadChildren: () => import('./modules/searchbar/searchbar.module').then(m => m.SearchbarModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
