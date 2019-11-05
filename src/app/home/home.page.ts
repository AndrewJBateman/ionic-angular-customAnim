import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { customAlertEnter } from '../customAlertEnter';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private toastCtrl: ToastController, private alert: AlertController) {}

  async showAlert() {
    let alert = await this.alert.create({
      message: 'A new alert message',
      header: 'Alert Header',
      buttons: ['OK'],
      enterAnimation: customAlertEnter
    });

    alert.present();
  }
}
