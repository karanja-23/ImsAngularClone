import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {
  url = 'https://mobileimsbackend.onrender.com/assets';
  constructor() { }
  async getAssets() {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  }
}
