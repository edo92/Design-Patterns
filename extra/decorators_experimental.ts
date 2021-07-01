/**
 *
 * Method Decorators
 */
export function disable(
  target: Object,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  descriptor.value = () => {
    console.log("runing decorator....");
  };
}

export function before(hook: Function) {
  return function <T extends Function>(
    target: Object,
    methodName: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    return {
      get: function (this: T) {
        let originalMethod = descriptor.value.bind(this);
        hook = hook.bind(this);

        return () => {
          hook();
          originalMethod();
        };
      },
    };
  };
}

/**
 *
 *  Constructor Decorator
 */
export function capitalize() {
  return function <T extends { new (...args): {} }>(constructor: T) {
    return class extends constructor {
      _a = "A";
      _b = "B";
    };
  };
}

export class MyClassX {
  @disable
  foo() {
    console.log("foo");
  }

  @before(() => console.log("before Hook"))
  bar() {
    console.log("bar");
  }
}

const myclass = new MyClassX();
myclass.bar();
