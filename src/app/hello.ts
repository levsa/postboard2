import {Component} from '@angular/core';

import {fabric} from 'fabric';

@Component({
  selector: 'fountain-app',
  moduleId: __moduleName,
  templateUrl: 'hello.html'
})
export class HelloComponent {
  public hello: string;
  private canvas: Canvas;
  private width: number;
  private height: number;

  constructor() {
    this.hello = `Hello World: ${fabric.version}`;
    this.width = 0;
    this.height = 0;
  }

  ngOnInit() {
    this.canvas = new fabric.Canvas('canvas');
    this.canvas.setBackgroundColor('blue');
    this.width = this.canvas.getWidth();
    this.height = this.canvas.getHeight();
    // create a rectangle object
    var rect: Rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 100,
      height: 100,
      rx: 20,
      ry: 20
    });

    // "add" rectangle onto canvas
    this.canvas.add(rect);
  }
}
