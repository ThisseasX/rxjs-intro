export class Observable {
  constructor(subscriptionFn) {
    this.subscriptionFn = subscriptionFn;
  }

  subscribe(next, error, complete) {
    const observer = {
      next,
      error,
      complete,
    };

    this.subscriptionFn(observer);
  }

  pipe(...operators) {
    return operators.reduce((stream$, operator) => operator(stream$), this);
  }
}
