import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DogsService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://dog.ceo/api';
  }

  getBreeds() {
    return this.http.get(this.url + '/breeds/list/all');
  }

  getBreedsImg(breed) {
    return this.http.get(this.url + `/breed/${breed}/images/random`);
  }
}
