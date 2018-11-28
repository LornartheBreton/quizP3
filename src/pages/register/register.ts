import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  home=HomePage;
  usuario={
    email: null,
    pass: null,
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  goHome(){
    console.log(this.usuario.email + " " + this.usuario.pass);
    if(this.usuario.email!=null&&this.usuario.pass!=null){
      this.navCtrl.push(this.home,this.usuario);
    }else{
      const alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Te faltan parametros',
        buttons: ['OK']
      });
      alert.present();
    }
  }

}
