import {Directive, Output, EventEmitter, OnInit, ElementRef, Input} from '@angular/core';
import interact from 'interactjs';

import {Square, getSquare, setSquare} from '@app-types/square';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective implements OnInit {

  @Input() initial: Square = {x: 100, y: 100, w: 100, h: 100};

  @Output() dragStart = new EventEmitter<void>();
  @Output() dragMove = new EventEmitter<Square>();
  @Output() dragEnd = new EventEmitter<Square>();

  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {
    setSquare(this.element.nativeElement, this.initial);

    interact(this.element.nativeElement)
      .draggable({
        inertia: true,
        listeners: {
          start: () => this.dragStart.emit(),
          move: event => {
            const square = getSquare(event.target);
            square.x += event.dx;
            square.y += event.dy;
            setSquare(this.element.nativeElement, square);
            this.dragMove.emit(square);
          },
          end: event => this.dragEnd.emit(getSquare(event.target))
        },
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true
          })
        ]
      });
  }

}
