import { Component, ViewChild } from '@angular/core';

@Component({
  templateUrl: './image-cropping-demo.component.html',
  styleUrls: ['./image-cropping-demo.component.scss'],
})
export class ImageCroppingDemoComponent {
  desk = require('../../../../assets/demo/desk.jpeg');
  grass = require('../../../../assets/demo/grass.jpeg');
  bird = require('../../../../assets/demo/bird.jpeg');
  grassCoord: any;
  deskSelection = [30, 30, 200, 200];
  grassSelection = [100, 100, 300, 300];
  animateSelection = [100, 200, 300, 400];
  bgColor = 'black';
  bgOpacity = 0.6;
  @ViewChild('preview') previewEl: any;

  onGrassChange(c: any): void {
    this.grassCoord = c;
  }

  onBirdChange(c: any): void {
    this.previewEl.nativeElement.style.backgroundImage =
      `url(${this.bird})`;
    this.previewEl.nativeElement.style.backgroundSize =
      `${200 * c.displayWidth / c.w}px ${200 * c.displayHeight / c.h}px`;
    this.previewEl.nativeElement.style.backgroundPosition =
      `${-c.x * 200 / c.w}px ${-c.y * 200 / c.h}px`;
  }

  changeAnimateSelection(i: number): void {
    switch (i) {
      case 1:
        this.animateSelection = [100, 10, 200, 200];
        break;

      case 2:
        this.animateSelection = [10, 10, 150, 200];
        break;

      case 3:
        this.animateSelection = [100, 100, 200, 250];
        break;

      case 4:
        this.animateSelection = [200, 100, 250, 300];
        break;

      case 5:
        this.animateSelection = [300, 300, 350, 320];
        break;

      case 0:
      default:
        this.animateSelection = [0, 0, 0, 0];
    }
  }

  changeOpacity(opacity: number) {
    this.bgOpacity = opacity;
  }

  changeColor(color: string) {
    this.bgColor = color;
  }
}
