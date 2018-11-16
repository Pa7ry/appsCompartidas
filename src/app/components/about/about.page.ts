import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

// Services
import { DogsService } from './../../services/dogs.service';

// Pages
import { RazasComponent } from './../razas/razas.component';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {

  razas: any;

  constructor(public dogsServ: DogsService, public modalCtrl: ModalController) {
    this.getDogs();
  }

  getDogs() {
    this.dogsServ.getBreeds()
      .subscribe(resp => this.razas = resp.message);
  }

  async presentRazas() {
    const modal = await this.modalCtrl.create({
      component: RazasComponent,
      componentProps: { value: this.razas }
    });
    return await modal.present();
  }

}
