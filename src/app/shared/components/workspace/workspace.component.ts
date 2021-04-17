import {Component, Input, Output, EventEmitter} from '@angular/core';

import {Square} from '@app-types/square';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent {

  @Input() square1: Square = {x: 100, y: 100, w: 100, h: 100};
  @Input() square2: Square = {x: 150, y: 150, w: 100, h: 100};

  @Output() square1Change = new EventEmitter<Square>();
  @Output() square2Change = new EventEmitter<Square>();

}
