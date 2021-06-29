# Principals

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
- Instead of adding code to existing class, Open/close Principal requires us to create new class with and extend it with new class/logic

### Liskov Substitution principal
- Superclass shall be replaceable with objects of its subclasses and have the same result;
- Examples
    #### Bad Example
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

    #### Good Example
    ```
        public class Bird{}
        public class FlyingBirds extends Bird{
            public void fly(){}
        }
        public class Duck extends FlyingBirds{}
        public class Ostrich extends Bird{} 
    ```


### Interface Segregation
- segregation principle states that no client should be forced to depend on methods it does not use. Class implements multiple segregated(split) interfaces, so other classes can you one of interfaces without having unused methods.


### Dependency Inversion
- Imagine as Abstractions are interfaces, it is a form of loosely coupling.


<br/>
<br/>


## Creational Design Patterns
- Design Patterns /  group of design patterns
    - Creational - Control of creating objects
    - Structural - App's structure
    - Behavioral - Determain ways of application flow and how application communicates with eachother.

- Singleton Pattern - Only one instace will be created, and new instance will refere back to itself in the memory.
    - Shared State
    - Avoid Long 
    - Cross Class Communication
    - Perfectly represents unique items

- Factory Pattern - The factory method pattern is a creational pattern that uses factory methods to deal with the problem of creating objects without having to specify the exact class of the object that will be created.
    - A combination of the single responibility and Open/Close prinicpales

- Loose Coupling - Software parts that communicate with each other have little to no knowlage of each oother's actual implementation. simply put Loose coupling is achieved by means of a design that promotes single-responsibility and separation of concerns.
Interfaces are a powerful tool to use for decoupling. Classes can communicate through interfaces rather than other concrete classes, and any class can be on the other end of that communication simply by implementing the interface.
  - Block Boxes - As long as interfaces match we do not care how its component is implemented.

- Object Pool - 
