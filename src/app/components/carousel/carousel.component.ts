import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  index = 0;
  speed = 10000;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  // avatars = '12345'.split('').map((x, i) => {
  //   const num = i;
  //   // const num = Math.floor(Math.random() * 1000);
  //   return {
  //     url: `https://picsum.photos/600/400/?${num}`,
  //     title: `${num}`
  //   };
  // });
  avatar = [{
    url: "https://timesofindia.indiatimes.com/thumb/msid-73095052,width-800,height-600,resizemode-4/73095052.jpg"
  },
  {
    url: "https://i.ytimg.com/vi/eViKNj9TXRM/maxresdefault.jpg"
  },
  {
    url: "https://i.ytimg.com/vi/otAcYFVFE7k/maxresdefault.jpg"
  }]
  constructor() { }

  // push() {
  //   this.avatars.push(
  //     {
  //       url: `https://picsum.photos/600/400/?${this.avatars.length + 1}`,
  //       title: `${this.avatars.length + 1}`
  //     }
  //   );
  // }

  // remove() {
  //   this.avatars.splice(this.avatars.length - 1, 1);
  // }


  indexChanged(index) {
    //console.log(index);
  }

  toggleDirection($event) {
    this.direction = this.directionToggle ? 'right' : 'left';
  }


  ngOnInit() {
  }
}
