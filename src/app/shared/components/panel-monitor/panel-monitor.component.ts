import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

import {Square} from '@app-types/square';

function toCm(px: number): number {
  return px / 50;
}

function getCmSquare(square: Square): Square {
  return {
    x: toCm(square.x),
    y: toCm(square.y),
    w: toCm(square.w),
    h: toCm(square.h)
  };
}

function getArea(square: Square): number {
  return toCm(square.w) * toCm(square.h);
}

function getIntersection(square1: Square, square2: Square): number {
  square1 = getCmSquare(square1);
  square2 = getCmSquare(square2);
  const d1xMax = square1.x + square1.w;
  const d2xMax = square2.x + square2.w;
  const d1yMax = square1.y + square1.h;
  const d2yMax = square2.y + square2.h;
  const xOverlap = Math.max(0, Math.min(d1xMax, d2xMax) - Math.max(square1.x, square2.x));
  const yOverlap = Math.max(0, Math.min(d1yMax, d2yMax) - Math.max(square1.y, square2.y));
  return xOverlap * yOverlap;
}

function getUnion(area1: number, area2: number, intersection: number): number {
  return area1 + area2 - intersection;
}

function getIoU(intersection: number, union: number): number {
  return intersection / union;
}

@Component({
  selector: 'app-panel-monitor',
  templateUrl: './panel-monitor.component.html',
  styleUrls: ['./panel-monitor.component.scss']
})
export class PanelMonitorComponent implements OnChanges {

  @Input() square1: Square = {x: 100, y: 100, w: 100, h: 100};
  @Input() square2: Square = {x: 150, y: 150, w: 100, h: 100};

  area1: number = getArea(this.square1);
  area2: number = getArea(this.square2);
  intersection: number = getIntersection(this.square1, this.square2);
  union: number = getUnion(this.area1, this.area2, this.intersection);
  iou: number = getIoU(this.intersection, this.union);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.square1 || changes.square2) {
      if (changes.square1) {
        this.area1 = getArea(this.square1);
      }
      if (changes.square2) {
        this.area2 = getArea(this.square2);
      }
      this.intersection = getIntersection(this.square1, this.square2);
      this.union = getUnion(this.area1, this.area2, this.intersection);
      this.iou = getIoU(this.intersection, this.union);
    }
  }

}
