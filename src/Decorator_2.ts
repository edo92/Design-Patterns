class Computer {
  boot(): void {
    console.log("Computer is booting");
  }

  shutDown(): void {
    console.log("Computer is Shutting down");
  }

  display(): void {
    console.log("Display content in one Screen");
  }

  print(): void {
    console.log("Printing");
  }

  renderVideo(): void {
    console.log("cannot render video withoud dedicated graphic card");
  }
}

class ComputerComponentDecorator extends Computer {
  constructor(private _computer: Computer) {
    super();
  }

  boot() {
    return this._computer.boot();
  }

  shutDown() {
    return this._computer.shutDown();
  }

  display() {
    return this._computer.display();
  }

  print() {
    return this._computer.print();
  }

  renderVideo() {
    return this._computer.renderVideo();
  }
}

class ServerComputer extends Computer {
  boot() {
    console.log("booting server...");
  }

  shutDown() {
    console.log("server is shutting down");
  }
}

class ComputerWithPrinterDecorator extends ComputerComponentDecorator {
  constructor(computer: Computer) {
    super(computer);
  }

  print(): void {
    console.log("printing...");
  }
}

class ComputerWithDedicatedGPU extends ComputerComponentDecorator {
  constructor(computer: Computer) {
    super(computer);
  }

  renderVideo() {
    console.log("Rendering video with dedicated GPU");
  }
}

const server = new ServerComputer();
const serverWIthPrinter = new ComputerWithPrinterDecorator(server);
const serverWithPrinterDedicateGPU = new ComputerWithDedicatedGPU(
  serverWIthPrinter
);

serverWithPrinterDedicateGPU.print();
serverWithPrinterDedicateGPU.renderVideo();
