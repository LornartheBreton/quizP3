import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TypeCheckCompiler } from '@angular/compiler/src/view_compiler/type_check_compiler';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  register=RegisterPage;
  usuarios=[];
  temp={
    email:"",
    pass:""
  };
  constructor(public navCtrl: NavController,
    public navParams: NavParams, public alertCtrl: AlertController,
    public storage: Storage) {
      this.storage.keys()
      .then(keys=> {
        if (keys.some(key => key == 'usuarios2')){
          this.storage.get('usuarios2')
          .then(usuarios => {
            this.usuarios = JSON.parse(usuarios);
          });
        }
      });
      console.log(this.navParams.get('email'));
      this.usuarios.push(
        {
          email: this.navParams.get('email'),
          pass: this.navParams.get('pass')
        }
      );
      this.storage.set('usuarios2', JSON.stringify(this.usuarios));
      this.storage.keys()
      .then(keys=> {
        if (keys.some(key => key == 'usuarios2')){
          this.storage.get('usuarios2')
          .then(usuarios => {
            this.usuarios = JSON.parse(usuarios);
          });
        }
      });
  }
  registerUser(){
    this.navCtrl.push(this.register);
  }

  login(){
    let index=this.usuarios.findIndex(usuario=>usuario.email==this.temp.email);
    console.log(index);
    if (index>0){
      const alert = this.alertCtrl.create({
        title: 'Éxito',
        subTitle: 'Inicio de sesión con éxito',
        buttons: ['OK']
      });
      alert.present();
    }else{
      const alert = this.alertCtrl.create({
        title: 'Mal',
        subTitle: 'No existe el usuario',
        buttons: ['OK']
      });
      alert.present();
    }
  }

}
