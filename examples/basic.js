import { Observable } from '../my-rxjs';

const stream$ = new Observable((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
});

stream$.subscribe(console.log);
