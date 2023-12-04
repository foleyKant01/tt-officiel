import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tt-test';
  images = [
    {
      imageSrc: 'https://www.pinterest.com/pin/688839705505359188/',
      imageAlt: 'Carousel1'
    },
    {
      imageSrc: 'https://www.pinterest.com/pin/924293523499910028/',
      imageAlt: 'Carousel2'
    },
    {
      imageSrc: 'https://www.pinterest.com/pin/270286415129098289//',
      imageAlt: 'Carousel3'
    },
    {
      imageSrc: 'https://www.pinterest.com/pin/318489004909640138/',
      imageAlt: 'Carousel4'
    },
  ]


}
