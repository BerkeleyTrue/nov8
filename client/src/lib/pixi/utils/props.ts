import {
  DisplayObject,
  IPoint,
  IPointData,
  ObservablePoint,
  Point,
} from 'pixi.js';

export type PointProp =
  | Point
  | IPointData
  | ObservablePoint
  | [number, number]
  | number;

export const isPoint = (x: any): x is IPoint =>
  x instanceof Point || x instanceof ObservablePoint;

export const parsePoint = (value: PointProp): Point => {
  if (isPoint(value)) {
    return value;
  }

  if (Array.isArray(value)) {
    return new Point(value[0], value[1]);
  }

  if (typeof value === 'number') {
    return new Point(value, value);
  }

  if (value.x !== undefined && value.y !== undefined) {
    return new Point(value.x, value.y);
  }

  throw new Error('Invalid PointProp');
};

export const setValue = (instance: DisplayObject, key: string, value: any) => {
  if (isPoint(instance[key])) {
    const point = parsePoint(value);
    instance[key].copyFrom(point);
  } else {
    instance[key] = value;
  }
};

export const applyProps = (
  instance: DisplayObject,
  prevProps: {} = {},
  newProps: {} = {},
) => {
  for (const key in newProps) {
    if (newProps[key]) {
      const newValue = newProps[key];
      const prevValue = prevProps[key];
      if (newValue !== prevValue) {
        setValue(instance, key, newValue);
      }
    }
  }
};
