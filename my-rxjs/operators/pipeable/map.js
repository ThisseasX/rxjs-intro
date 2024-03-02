import { Observable } from '../../observable';

export const map = (transform) => (stream$) =>
  new Observable((observer) => {
    stream$.subscribe((value) => {
      observer.next(transform(value));
    });
  });
