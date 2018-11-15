import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';

// Services
import { DogsService } from './../services/dogs.service';

// Components
import { ImgComponent } from './../components/img/img.component';

@Component({
  selector: 'app-razas',
  templateUrl: './razas.component.html',
  styleUrls: ['./razas.component.scss']
})
export class RazasComponent implements OnInit {

  razas: any;
  subrazas: any;
  img: any;

  constructor(public navParams: NavParams, public dogsServ: DogsService, public popoverCtrl: PopoverController) {
    this.razas = this.navParams.get('value');
    console.log(this.razas);
  }

  getImg(breed) {
    this.dogsServ.getBreedsImg(breed)
      .subscribe(resp => this.img = resp.message);

    this.presentModal(breed);
  }

  async presentModal(breed) {
    console.log(this.img);
    const dogImg = await this.popoverCtrl.create({
      component: ImgComponent,
      componentProps: {
        img: this.img,
        breed: breed
      }
    });

    dogImg.present();
  }

  ngOnInit() {
  }

}
