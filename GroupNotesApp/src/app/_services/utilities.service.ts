import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  constructor( public loadingController: LoadingController, public toastController: ToastController) { 

  }

  // This service handles all error or success messages for the application in one place.

  // Display loading icon
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: "bubbles",
      duration: 600,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    
    return await loading.present();
  }

  // Present toast message that will handle either a success or failure
  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      showCloseButton: true,
      position: 'top',
      closeButtonText: 'Done'
    });
    
    toast.present();
  }
}
