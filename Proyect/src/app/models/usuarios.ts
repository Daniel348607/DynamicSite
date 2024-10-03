export class Usuario {

  constructor(UsuarioId=0, UsuarioNom='', UsuarioPas='', UsuarioPer=0,
  UsuarioMai='', UsuarioAli='',UsuarioTel=0, UsuarioDir='', UsuarioRazSoc = '',
  UsuarioRut = '', UsuarioPai = '', UsuarioDep = '', UsuarioCel = '', UsuarioRol = 0) {

      this.UsuarioId  = UsuarioId;
      this.UsuarioNom = UsuarioNom;
      this.UsuarioPas = UsuarioPas;
      this.UsuarioPer = UsuarioPer;
      this.UsuarioMai = UsuarioMai;
      this.UsuarioAli = UsuarioAli;
      this.UsuarioTel = UsuarioTel;
      this.UsuarioDir = UsuarioDir;
      this.UsuarioRazSoc = UsuarioRazSoc;
      this.UsuarioRut = UsuarioRut;
      this.UsuarioPai = UsuarioPai;
      this.UsuarioDep = UsuarioDep;
      this.UsuarioCel = UsuarioCel;
      this.UsuarioRol = UsuarioRol;
  }
  UsuarioId: number;
  UsuarioNom: string;
  UsuarioPas: string;
  UsuarioPer: number;
  UsuarioMai: string;
  UsuarioAli: string;
  UsuarioTel: number;
  UsuarioDir: string;
  UsuarioRazSoc: string;
  UsuarioRut: string;
  UsuarioPai: string;
  UsuarioDep: string;
  UsuarioCel: string;
  UsuarioRol: number;
}
