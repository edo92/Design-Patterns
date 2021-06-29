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
