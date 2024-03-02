import { Observable } from '../../observable';

export const of = (...values) =>
  new Observable((observer) => {
    values.forEach((value) => observer.next(value));
  });
