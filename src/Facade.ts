/**
 *
 * Facade Design patter
 * Movie theater example
 */
class BlurayPlayer {
  on() {
    console.log("Bluray turning on");
  }

  turnOff() {
    console.log("Bluray turning off");
  }

  play() {
    console.log("Bluray Playing");
  }
}

class Amplifier {
  on() {
    console.log("AMP turning on");
  }

  turnOff() {
    console.log("AMP turning off");
  }

  setSource(source: String) {
    console.log(`setting Source to ${source}`);
  }

  setVolume(volumeLevel: number) {
    console.log(`Setting volume to ${volumeLevel}`);
  }
}

class Lights {
  dim() {
    console.log("Lights are dimming");
  }

  lightsOn() {
    console.log("Lights are on");
  }

  lightsOff() {
    console.log("Lights are off");
  }
}

class TV {
  turnOn() {
    console.log("TV is on");
  }

  turnOff() {
    console.log("TV is off");
  }
}

class PopcornMaker {
  turnOn() {
    console.log("Popcorn maker is on");
  }

  turnOff() {
    console.log("Popcorn maker is off");
  }

  pop() {
    console.log("poping corn");
  }
}

/**
 * Facade
 */
class HomeTheaterFacade {
  private _bluray: BlurayPlayer;
  private _amplifier: Amplifier;
  private _lights: Lights;
  private _tv: TV;
  private _popcornMaker: PopcornMaker;

  constructor(
    bluray: BlurayPlayer,
    amplifier: Amplifier,
    lights: Lights,
    tv: TV,
    popcornMaker: PopcornMaker
  ) {
    this._bluray = bluray;
    this._amplifier = amplifier;
    this._lights = lights;
    this._tv = tv;
    this._popcornMaker = popcornMaker;
  }

  public watchMovie() {
    this._popcornMaker.turnOn();
    this._popcornMaker.pop();

    this._lights.dim();
    this._tv.turnOn();

    this._amplifier.on();
    this._amplifier.setSource("bluray");
    this._amplifier.setVolume(11);

    this._bluray.on();
    this._bluray.play();
  }

  public endMovie() {
    this._tv.turnOff();
    this._bluray.turnOff();
    this._amplifier.turnOff();
    this._popcornMaker.turnOff();
  }
}

const homeTheater = new HomeTheaterFacade(
  new BlurayPlayer(),
  new Amplifier(),
  new Lights(),
  new TV(),
  new PopcornMaker()
);

homeTheater.watchMovie();
