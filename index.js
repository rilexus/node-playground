const sleep = (time) => new Promise((res) => setTimeout(res, time));

// class Observable {
//   callback = null;
//   constructor(callback) {
//     this.callback = callback;
//   }
//
//   subscribe(observer) {
//     return this.callback(observer);
//   }
// }

/*
 * 1. Basic Observable class, with a callback.
 */
// class Observable {
//   callback = null;
//   constructor(callback) {
//     this.callback = callback;
//   }
//
//   subscribe(callback) {
//     return callback(this.callback());
//   }
// }
//
// const o = new Observable(() => {
//   return 1 + 1;
// });
//
// o.subscribe((value) => {
//   console.log(value);
// });

/*
 * 2. Observable with next callback: call next multiple times
 */
// class Observable {
//   callback = null;
//   constructor(callback) {
//     this.callback = callback;
//   }
//
//   subscribe(next) {
//     return this.callback(next /* the order here is different */);
//   }
// }
//
// const o = new Observable((next) => {
//   next(1 + 1);
//   next(2 + 1);
//   next(3 + 1);
// });
//
// o.subscribe((value) => {
//   console.log(value);
// });

/*
 * 3. Observable as setInterval
 */
// class Observable {
//   callback = null;
//   constructor(callback) {
//     this.callback = callback;
//   }
//
//   subscribe(next) {
//     return this.callback(next /* the order here is different */);
//   }
// }
//
// const interval = new Observable((next) => {
//   setInterval(() => {
//     next(1 + 1);
//   }, 1000);
// });
//
// interval.subscribe((value) => {
//   console.log(value);
// });

/*
 * 4. Observable timeout with return value from subscribe
 */
// class Observable {
//   callback = null;
//   constructor(callback) {
//     this.callback = callback;
//   }
//
//   subscribe(next) {
//     return this.callback(next);
//   }
// }
//
// const interval = new Observable((next) => {
//   const timeoutId = setInterval(() => {
//     next(1 + 1);
//   }, 1000);
//
//   // return the timeout id to unsubscribe
//   return timeoutId;
// });
//
// const timeoutId = interval.subscribe((value) => {
//   console.log(value);
// });
//
// console.log(timeoutId);

/*
 * 5. Observable Counter with "clearInterval"
 */
// class Observable {
//   callback = null;
//   constructor(callback) {
//     this.callback = callback;
//   }
//
//   subscribe(next) {
//     return this.callback(next);
//   }
// }
//
// const interval = new Observable((next) => {
//   let counter = -1;
//   const timeoutId = setInterval(() => {
//     next((counter += 1));
//   }, 1000);
//
//   // return the timeout id to unsubscribe
//   return timeoutId;
// });
//
// const timeoutId = interval.subscribe((value) => {
//   if (value === 3) {
//     // NOTE: The subscriber knows the implementation details of the interval.
//     // He knows that he needs to call "clearInterval".
//     // Lets abstract that!
//     clearInterval(timeoutId);
//   }
//   console.log(value);
// });
//
// console.log(timeoutId);

/*
 * 6. Unsubscribe
 * */
// class Observable {
//   callback = null;
//   constructor(callback) {
//     this.callback = callback;
//   }
//
//   subscribe(next) {
//     return this.callback(next);
//   }
// }
//
// const interval = new Observable((next) => {
//   let counter = -1;
//   const timeoutId = setInterval(() => {
//     next((counter += 1));
//   }, 1000);
//
//   // return the timeout id to unsubscribe
//   return {
//     unsubscribe: () => {
//       clearInterval(timeoutId);
//     },
//   };
// });
//
// const subscription = interval.subscribe((value) => {
//   if (value === 3) {
//     // User does not know how the interval is implemented. That is a good thing!
//     subscription.unsubscribe();
//   }
//   console.log(value);
// });
//
// console.log(subscription);

/*
 * Interval Factory
 * */
// const interval = (time) => {
//   return new Observable(({ next }) => {
//     setInterval(() => {
//       next(1 + 1);
//     }, time);
//   });
// };
//
// interval(100).subscribe({
//   next: (res) => {
//     console.log(res);
//   },
// });

/*
 * Observer object: handle errors and next callback
 * */
// class Observable {
//   callback = null;
//   constructor(callback) {
//     this.callback = callback;
//   }
//
//   subscribe(observer) {
//     return this.callback(observer);
//   }
// }
//
// const interval = new Observable(({ next, error }) => {
//   let counter = -1;
//   let timeoutId = null;
//   timeoutId = setInterval(() => {
//     try {
//       next((counter += 1));
//     } catch (e) {
//       error?.(e);
//     }
//   }, 1000);
//
//   // return the timeout id to unsubscribe
//   return {
//     unsubscribe: () => {
//       clearInterval(timeoutId);
//     },
//   };
// });
//
// const subscription = interval.subscribe({
//   next: (value) => {
//     if (value === 3) {
//       throw new Error("Hier");
//     }
//     console.log(value);
//   },
//   error: (e) => {
//     console.log(e);
//     // Note: optional unsubscribe
//     // subscription.unsubscribe()
//   },
// });
// // Note: the app still lives after error
// console.log(subscription);

/*
 * Abstract the Observable to a factory function
 * */
// class Observable {
//   callback = null;
//   constructor(callback) {
//     this.callback = callback;
//   }
//
//   subscribe(observer) {
//     return this.callback(observer);
//   }
// }
//
// const interval = (time) => {
//   return new Observable(({ next, error }) => {
//     let counter = -1;
//     let timeoutId = null;
//     timeoutId = setInterval(() => {
//       try {
//         next((counter += 1));
//       } catch (e) {
//         error?.(e);
//       }
//     }, time);
//
//     // return the timeout id to unsubscribe
//     return {
//       unsubscribe: () => {
//         clearInterval(timeoutId);
//       },
//     };
//   });
// };
//
// const $interval = interval(1000);
//
// const subscription = $interval.subscribe({
//   next: (value) => {
//     if (value === 3) {
//       throw new Error("Hier");
//     }
//     console.log(value);
//   },
//   error: (e) => {
//     console.log(e);
//   },
// });
// // Note: the app still lives after error
// console.log(subscription);

/*
 * fromArray. Implement together
 * */
// class Observable {
//   callback = null;
//   constructor(callback) {
//     this.callback = callback;
//   }
//
//   subscribe(observer) {
//     return this.callback(observer);
//   }
// }
// const fromArray = (array) => {
//   return new Observable(({ next }) => {
//     array.forEach((v) => {
//       next(v);
//     });
//   });
// };
//
// const $array = fromArray([1, 2, 3, 4]);
// $array.subscribe({
//   next: (v) => {
//     console.log(v);
//   },
// });

/*
 * fromEvent function
 * */
// class Observable {
//   callback = null;
//   constructor(callback) {
//     this.callback = callback;
//   }
//
//   subscribe(observer) {
//     return this.callback(observer);
//   }
// }
//
// const fromEvent = (element, event) => {
//   return new Observable(({ next, error }) => {
//     element.addEventListener(event, next);
//     return {
//       unsubscribe: () => {
//         element.removeEventListener(event, next);
//       },
//     };
//   });
// };
//
// const divElement = {
//   // imagine this is an HTML element
//   addEventListener: () => {},
//   removeEventListener: () => {},
// };
//
// const $onClick = fromEvent(divElement, "click");
// // Or the same as this:
// const onClick = (element) => fromEvent(element, "click");
//
// const { unsubscribe } = onClick(divElement).subscribe({
//   next: () => {
//     console.log("clicked");
//   },
// });

/*
 * fromPromise: implement it yourself
 * */

// const fromPromise = (resolver) => {};
// const $promise = fromPromise(async () => {
//   return 4;
// });
// const subscription = $promise.subscribe({next: () => {}});

// SOLUTION:
// class Observable {
//   callback = null;
//   constructor(callback) {
//     this.callback = callback;
//   }
//
//   subscribe(observer) {
//     return this.callback(observer);
//   }
// }
//
// const fromPromise = (resolver) => {
//   return new Observable(({ next, error }) => {
//     let state = "pending";
//     resolver()
//       .then((response) => {
//         if (state !== "unsubscribed") {
//           next(response);
//         }
//       })
//       .catch((e) => {
//         error?.(e);
//       });
//     return {
//       unsubscribe: () => {
//         // Note: add AbortController here
//         state = "unsubscribed";
//       },
//     };
//   });
// };
//
// const sleep = (time) => new Promise((res) => setTimeout(res, time));
//
// const $promise = fromPromise(async () => {
//   await sleep(1000);
//   return 3;
// });
//
// const { unsubscribe } = $promise.subscribe({
//   next: (value) => {
//     console.log(value);
//   },
// });

/*
 * forEach. Implement together
 * */
// class Observable {
//   callback = null;
//   constructor(callback) {
//     this.callback = callback;
//   }
//
//   subscribe(observer) {
//     return this.callback(observer);
//   }
//
//   forEach(callback) {
//     const self = this;
//     return new Observable(({ next }) => {
//       self.subscribe({
//         next: (v) => {
//           callback(v);
//           next(v);
//         },
//       });
//     });
//   }
// }

/*
 * "map" function on the Observable object. Implement yourself
 * */
// class Observable {
//   callback = null;
//   constructor(callback) {
//     this.callback = callback;
//   }
//
//   subscribe(observer) {
//     return this.callback(observer);
//   }
//
//   map(mapper) {
//     const self = this;
//     return new Observable(({ next }) => {
//       self.subscribe({
//         next: (v) => {
//           next(mapper(v));
//         },
//       });
//     });
//   }
// }
//
// const interval = (time) => {
//   return new Observable(({ next, error }) => {
//     let counter = -1;
//     let timeoutId = null;
//     timeoutId = setInterval(() => {
//       try {
//         next((counter += 1));
//       } catch (e) {
//         error?.(e);
//       }
//     }, time);
//
//     // return the timeout id to unsubscribe
//     return {
//       unsubscribe: () => {
//         clearInterval(timeoutId);
//       },
//     };
//   });
// };
//
// const $interval = interval(1000);
// $interval
//   .map((value) => value * 2)
//   .subscribe({
//     next: (v) => {
//       console.log(v);
//     },
//   });

/*
 * "filter" function on the Observable object
 * */
// class Observable {
//   callback = null;
//   constructor(callback) {
//     this.callback = callback;
//   }
//
//   subscribe(observer) {
//     return this.callback(observer);
//   }
//
//   filter(predicate) {
//     const self = this;
//     return new Observable(({ next }) => {
//       self.subscribe({
//         next: (v) => {
//           if (predicate(v)) {
//             next(v);
//           }
//         },
//       });
//     });
//   }
// }
//
// const interval = (time) => {
//   return new Observable(({ next, error }) => {
//     let counter = -1;
//     let timeoutId = null;
//     timeoutId = setInterval(() => {
//       try {
//         next((counter += 1));
//       } catch (e) {
//         error?.(e);
//       }
//     }, time);
//
//     // return the timeout id to unsubscribe
//     return {
//       unsubscribe: () => {
//         clearInterval(timeoutId);
//       },
//     };
//   });
// };
//
// const $interval = interval(1000);
// $interval
//   .filter((value) => value % 2 === 0)
//   .subscribe({
//     next: (v) => {
//       console.log(v);
//     },
//   });

/*
 * setTimeout with complete
 * */
// class Observable {
//   callback = null;
//   constructor(callback) {
//     this.callback = callback;
//   }
//
//   subscribe(observer) {
//     return this.callback(observer);
//   }
// }
//
// const timeout = new Observable(({ next, complete }) => {
//   const id = setTimeout(() => {
//     complete?.();
//   }, 1000);
//   return {
//     unsubscribe() {
//       clearTimeout(id);
//     },
//   };
// });
//
// timeout.subscribe({
//   complete: () => {
//     console.log("first done!");
//     timeout.subscribe({
//       complete: () => {
//         console.log("second done!");
//       },
//     });
//   },
// });

/*
 * concat Observables
 * */
// class Observable {
//   callback = null;
//   constructor(callback) {
//     this.callback = callback;
//   }
//
//   subscribe(observer) {
//     return this.callback(observer);
//   }
//
//   map(mapper) {
//     const self = this;
//     return new Observable(({ next, complete }) => {
//       self.subscribe({
//         complete: () => {
//           complete();
//         },
//         next: (v) => {
//           next(mapper(v));
//         },
//       });
//     });
//   }
//   static concat(...observables) {
//     return new Observable(({ next, complete }) => {
//       let sub = null;
//
//       const handleSubscription = (obs) => {
//         const [cur, ...rest] = obs;
//         if (!cur) {
//           complete();
//         }
//         if (cur) {
//           sub = cur.subscribe({
//             next: (v) => {
//               next(v);
//             },
//             complete: () => {
//               handleSubscription(rest);
//             },
//           });
//         }
//       };
//
//       handleSubscription(observables);
//
//       return {
//         unsubscribe() {
//           sub.unsubscribe();
//         },
//       };
//     });
//   }
// }
// const timeout = (time) => {
//   return new Observable(({ next, complete }) => {
//     const id = setTimeout(() => {
//       next?.();
//       complete?.();
//     }, time);
//
//     return {
//       unsubscribe() {
//         clearTimeout(id);
//       },
//     };
//   });
// };
//
// const timeouts = Observable.concat(
//   timeout(500).map(() => 500),
//   timeout(1000).map(() => 1000)
// );
//
// timeouts.subscribe({
//   next: (v) => {
//     console.log(v);
//   },
//   complete: () => {
//     console.log("complete");
//   },
// });

/*
 * Pipe function and operators
 * */
class Observable {
  callback = null;
  constructor(callback) {
    this.callback = callback;
  }

  subscribe(observer) {
    return this.callback(observer);
  }

  static pipe(...operations) {
    return operations.reduce((init, current) => current(init), this);
  }
}

const tap = (callback) => {
  return (obs) => {
    return new Observable(({ next, complete }) => {
      obs.subscribe({
        next: (v) => {
          callback(v);
          next(v);
        },
        complete: () => {
          complete();
        },
      });
    });
  };
};

const from = (value) => {
  return () => {
    return new Observable(({ next, complete }) => {
      if (Array.isArray(value)) {
        value.forEach((v) => {
          next(v);
        });
      } else {
        next(value);
      }

      complete(value);
      return {
        unsubscribe() {},
      };
    });
  };
};

const map = (mapper) => {
  return (obs) => {
    return new Observable(({ next, complete }) => {
      obs.subscribe({
        next(v) {
          next(mapper(v));
        },
        complete() {},
      });
    });
  };
};

Observable.pipe(
  from([1, 1, 1, 1, 1]),
  tap((v) => {
    console.log(v);
  }),
  map((v) => v * 2),
  tap((v) => {
    console.log(v);
  })
).subscribe({ next: () => {}, complete: () => {} });
