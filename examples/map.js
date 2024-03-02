import { Observable, map } from '../my-rxjs';

const stream$ = new Observable((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
});

const double = (x) => x * 2;

stream$
  .pipe(
    map(double), //
    map(double),
  )
  .subscribe(console.log);
