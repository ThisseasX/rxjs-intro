import { Observable } from '../../observable';

export const from = (values) =>
  new Observable((observer) => {
    values.forEach((value) => observer.next(value));
  });
