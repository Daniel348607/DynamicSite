import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { AngularFireModule, _firebaseAppFactory } from 'angularfire2';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent, SafePipe } from './app.component';
import { ProdmainComponent } from './components/prodmain/prodmain.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ModalComponent } from './popup/modal.component';
import { ModalService } from './popup/modal.service';
import { UsuariologinService } from './services/usuariologin.service';

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    ProdmainComponent,
    ContactoComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ModalService, UsuariologinService],
  bootstrap: [AppComponent]
})

export class AppModule { }
