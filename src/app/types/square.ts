export interface Square {
  x: number;
  y: number;
  w: number;
  h: number;
}

export function getSquare(el: HTMLElement): Square {
  const width = parseFloat(el.style.width);
  const height = parseFloat(el.style.height);
  const left = parseFloat(el.style.left);
  const top = parseFloat(el.style.top);
  return {x: left, y: top, w: width, h: height};
}

export function setSquare(el: HTMLElement, pos: Square): void {
  const {x, y, w, h} = pos;
  Object.assign(el.style, {left: px(x), top: px(y), width: px(w), height: px(h)});
}

function px(value: number): string {
  return value + 'px';
}
