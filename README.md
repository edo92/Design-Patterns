# TS Design Patterns

<br/>

## SOLID Principal
- Single Responsibility - A class Should be responsible for a single part of the functionality

- Open/Close - Open to extension & close to modification       

- Liskov Substitution - substitutablility, should be used a subclass in place of its parent class

- Interface Segregation - A class should not depend on methods that it does not need to implement

- Dependency Inversion - Classes and modules should depend on abstractions insted of concrete implementations

### Single Responsibility
- Error handling must be in separate function
- fetch -> filter must be separated
- Single responibility function must return fetched data, which can be used in another function

### Open/Close Principal
- Instead of adding code to existing class, Open/close Principal requires us to create new class with new logic and extend it with new class/logic

### Liskov Substitution principal
- Superclass shall be replaceable with objects of its subclasses and have the same result;
- Examples
    Bad Example
    ```
        public class Bird{
            public void fly(){}
        }
        public class Duck extends Bird{}
    ```
    The duck can fly because it is a bird, but what about this:
    ```
        public class Ostrich extends Bird{}
    ```
    Ostrich is a bird, but it can't fly, Ostrich class is a subtype of class Bird, but it shouldn't be able to use the fly method, that means we are breaking the LSP principle.

    Good Example
    ```
        public class Bird{}
        public class FlyingBirds extends Bird{
            public void fly(){}
        }
        public class Duck extends FlyingBirds{}
        public class Ostrich extends Bird{} 
    ```