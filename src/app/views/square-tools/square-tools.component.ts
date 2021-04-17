import {Component} from '@angular/core';

import {Square} from '@app-types/square';

@Component({
  selector: 'app-square-tools',
  templateUrl: './square-tools.component.html',
  styleUrls: ['./square-tools.component.scss']
})
export class SquareToolsComponent {

  square1: Square = {x: 100, y: 100, w: 100, h: 100};
  square2: Square = {x: 150, y: 150, w: 100, h: 100};

}
