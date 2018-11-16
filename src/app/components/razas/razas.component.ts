import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { ObjToArrayPipe } from './../../pipes/obj-to-array/obj-to-array.pipe';

// Services
import { DogsService } from './../../services/dogs.service';

// Components
import { ImgComponent } from './../img/img.component';

@Component({
  selector: 'app-razas',
  templateUrl: './razas.component.html',
  styleUrls: ['./razas.component.scss']
})
export class RazasComponent implements OnInit {

  razas: any;
  razasFiltradas: any[];
  subrazas: any;
  img: any;
  search: string;

  constructor(public navParams: NavParams, public dogsServ: DogsService,
    public popoverCtrl: PopoverController, public objToArray: ObjToArrayPipe,
    public modalCtrl: ModalController) {
    this.razas = this.navParams.get('value');
    console.log(this.razas);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  getImg(breed) {
    this.dogsServ.getBreedsImg(breed)
      .subscribe((resp) => {
        this.img = resp.message;
        this.presentModal(breed);
      });

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

  buscaRaza() {
    if (this.search !== '') {
      this.razasFiltradas = [];
      this.razas = this.objToArray.transform(this.razas);
      for (const perro of this.razas) {
        const filter = perro.search(this.search);
        if (filter === 0) {
          this.razasFiltradas.push(perro);
        }
      }
      this.razas = this.razasFiltradas;
    } else {
      this.resetF();
    }
  }

  resetF() {
    this.razas = this.navParams.get('value');
  }

  ngOnInit() {
  }

}
