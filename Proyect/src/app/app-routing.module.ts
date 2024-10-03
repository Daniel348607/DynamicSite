import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ProdmainComponent} from './components/prodmain/prodmain.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const ROUTES: Routes = [
  {path: 'prodmain', component: ProdmainComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'prodmain'}
];

export const AppRoutingModule = RouterModule.forRoot(ROUTES);
