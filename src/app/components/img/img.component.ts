import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  urlImg: string;
  raza: string;

  constructor(public navParams: NavParams) {
    this.urlImg = this.navParams.get('img');
    console.log(this.urlImg);
    this.raza = this.navParams.get('breed');
  }

  ngOnInit() {
  }

}
