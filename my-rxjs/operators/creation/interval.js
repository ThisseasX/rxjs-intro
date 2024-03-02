import { Observable } from '../../observable';

export const interval = (period) =>
  new Observable((observer) => {
    let i = 0;

    setInterval(() => {
      observer.next(i++);
    }, period);
  });
