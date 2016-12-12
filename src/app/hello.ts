import {Component} from '@angular/core';

import {fabric} from 'fabric';

@Component({
  selector: 'fountain-app',
  moduleId: __moduleName,
  templateUrl: 'hello.html'
})
export class HelloComponent {
  public hello: string;

  constructor() {
    this.hello = `Hello World: ${fabric.version}`;
  }
}
