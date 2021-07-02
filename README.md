# Principals

<br/>
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

- Instead of adding code to existing class, Open/close Principal requires us to create new class and extend it with that new class/logic

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

- Design Patterns / group of design patterns

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

- Loose Coupling - Software parts that communicate with each other have little to no knowlage of each other's actual implementation. simply put Loose coupling is achieved by means of a design that promotes single-responsibility and separation of concerns.
  Interfaces are a powerful tool to use for decoupling. Classes can communicate through interfaces rather than other concrete classes, and any class can be on the other end of that communication simply by implementing the interface.

  - Block Boxes - As long as interfaces match we do not care how its component is implemented.

- Object Pool - A pool of pre-initialized objects whose initialization is havyweight. Every time we need such an object we can take one from the pool.

<br/>
<br/>

## Dependency Injection

- Di Container/ioc container - The DI principle is a technique that is used to remove internal dependencies from the implementation by enabling these dependencies to be injected externally.
- Reflection - The ability to make use of code metadata to provide runtime information and inspection data about classese, interfaces and types.

- Inversion of Control (IoC) - Object do not create other object on which they rely to do thir work. Instead they get the objects that they need from an outside source (exm. config file). Gives us more abstruction (loosely coupled) rather than concret implementation.

<br/>
<br/>

### Decorators Typesciprt

- Class
- Method
- Property
- Accessors

### Dependancy Scope

- Singleton - Creates Only one instance
- Transient - Creates new instance everytime
- Request - Singleton in the scope of single http request

<br/>
<br/>

## Structural Design Patterns

- Decorator Pattern - In object-oriented programming, the decorator pattern is a design pattern that allows behavior to be added to an individual object, dynamically, without affecting the behavior of other objects from the same class.

- Adapter Pattern - The adapter pattern is a software design pattern that allows the interface of an existing class to be used as another interface. It is often used to make existing classes work with others without modifying their source code.

- Facade Pattern - A facade is an object that serves as a front-facing interface masking more complex underlying or structural code.

- Composite - The composite pattern describes a group of objects that are treated the same way as a single instance of the same type of object. The intent of a composite is to "compose" objects into tree structures to represent part-whole hierarchies.
