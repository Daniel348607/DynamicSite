import { Component, Output, Input, ViewEncapsulation,OnInit, AfterViewChecked, ViewChild, ElementRef, PipeTransform, Pipe,} from '@angular/core';
import { NgForm } from '@angular/forms';
import {Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from "@angular/platform-browser";

import { AppService } from './app.service';
import { Usuario } from './models/usuarios';
import { UserLogin } from './models/usuariologin'
import { UsuariologinService } from './services/usuariologin.service'

import { ParamuixService } from './services/paramuix.service'

import { ProductosService } from './services/productos.service'

import { ModalService } from './popup/modal.service';
import { ModalComponent } from './popup/modal.component';


@Pipe({ name: 'safe' })

export class SafePipe implements PipeTransform {
  constructor(public sanitizer: DomSanitizer) { }

  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './popup/modal.css']
})



export class AppComponent implements OnInit, AfterViewChecked {

  public username: string = '';
  public password: string = '';
  public rol: number = 0;
  public id: number = 0;

  public usraux: Usuario | undefined;
  public userlog: string = '';
  public userrol: number = 0;
  public userpre: number = 0;
  public userid: number = 0;

  public valObj: string | any = '';

  public colorHeader: string = '';
  public imgLogoEmp: string = '';

  constructor(public modalService: ModalService,
    public userLoginService: UsuariologinService,
    public router: Router,
    public route: ActivatedRoute,
    public appService: AppService,
    public paramuixService: ParamuixService,
    public domSanitizer: DomSanitizer) {
  }

  async ngOnInit() {

    //VALOR DEL COLOR DEL HEADER Y FOOTER
    var vparam: string = 'colorHeaderMain';
    await this.GetParamuIX(vparam);
    this.colorHeader = this.valObj[0].paramuixVal;

    //PARA CARGAR LOS VALORES EN EL CSS
    document.documentElement.style.setProperty('--colorHeader', this.colorHeader);
    document.documentElement.style.setProperty('--colorMenu', this.colorHeader);
    document.documentElement.style.setProperty('--colorFoot', this.colorHeader);

    //IMAGEN DEL LOGO DE LA EMPRESA
    var vparam: string = 'imgLogoEmp';
    await this.GetParamuIX(vparam);
    this.imgLogoEmp = "assets/" + this.valObj[0].paramuixVal;

    this.GetUsr();

  }

 ngAfterViewChecked(){

  }


  async GetParamuIX(vparam: string): Promise<void> {
    return new Promise((resolve) => {
      this.paramuixService.getparamUIX(vparam).subscribe(res => {
        this.valObj = JSON.parse(JSON.stringify(res));
        resolve();
      });
    });
  }


  GetUsr(){ //saber usuario logeado y total carrito
    var usrlog: UserLogin = this.userLoginService.getUserLoggedIn();

    if(usrlog){
      this.userrol = usrlog.rol;
      this.userlog = usrlog.username;
      this.userid  = usrlog.id;

    };

  }

  openModal(id: string) { //abrir la pantalla de log
    console.log(id);
    this.modalService.open(id);
  }

  closeModal(id: string) { //cerrar la pantalla de log
    this.username = '';
    this.password = '';

    this.modalService.close(id);
    if(this.userrol != 2){
      window.location.reload();
    }
  }


  logIn(form?: NgForm) { //procedimiento de log in

    let usr: UserLogin = {username: this.username, password: this.password, rol: this.rol, id: this.id}; //se cargan valores en arrray

    this.appService.getUsuarioLogin(usr).subscribe(res => {
      this.userLoginService.usuarioLogeado = res as Usuario;
      this.usraux = this.userLoginService.usuarioLogeado;

      if(typeof Object.keys(this.usraux)[0] === 'undefined') { //verifico datos, si estan bien los datos, guardo el resultado
        var M:any;
        this.username='';
        this.password='';
        this.rol=0;
        this.id = 0;
        alert('Usuario/Password incorrectos');
      }else{
        usr = {username: (this.usraux as any)[0].UsuarioAli, password: (this.usraux as any)[0].UsuarioPas, rol: (this.usraux as any)[0].UsuarioPer, id: (this.usraux as any)[0].UsuarioId};

        this.userLoginService.setUserLoggedIn(usr);

        var M:any;
        this.username='';
        this.password='';
        this.rol=0;
        this.id = 0;

        this.GetUsr();

        form?.reset();
        window.location.reload();

      };
    }
  )}

  LogOut(form?: NgForm) {  // procedimiento de logout
    this.userLoginService.setUserLoggedOut();

    form?.reset();
    location.replace('/prodmain');
  }


  OlvidoContra(){
    this.closeModal('custom-modal-1');
    //location.replace('/olvidocontra');
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();

      this.GetUsr();
    }
  }

}
