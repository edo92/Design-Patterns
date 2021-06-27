interface Subject {
  registerObserver(o: Observer);
  removeObserver(o: Observer);
  notifyObservers();
}

interface Observer {
  update(temperature: number);
}

/**
 *
 * Subject
 */
class WeatherStation implements Subject {
  private temperature: number;
  private observers: Observer[] = [];

  setTemperature(temp: number) {
    console.log("new temperature set");
    this.temperature = temp;
    this.notifyObservers();
  }

  registerObserver(o: Observer) {
    this.observers.push(o);
  }

  removeObserver(o: Observer) {
    const index = this.observers.indexOf(o);
    this.observers.splice(index, 1);
  }

  notifyObservers() {
    for (let observer of this.observers) {
      observer.update(this.temperature);
    }
  }
}

/**
 *
 * Observer
 */
class TemperatureDisplay implements Observer {
  constructor(weatherStation: Subject) {
    weatherStation.registerObserver(this);
  }

  public update(temperature: number) {
    console.log("update display", temperature);
    // logic here
  }
}

/**
 *
 * Another Observer
 */
class Fan implements Observer {
  constructor(weatherStation: Subject) {
    weatherStation.registerObserver(this);
  }

  public update(temperature: number) {
    if (temperature > 25) {
      console.log("Turn fan on");
      // Logic
    }

    if (temperature < 20) {
      console.log("turn fan off");
      //logic
    }
  }
}

const weatherStation = new WeatherStation();
const tempDisplay = new TemperatureDisplay(weatherStation);
const fan = new Fan(weatherStation);

// Can be in loop
weatherStation.setTemperature(30);
weatherStation.setTemperature(10);
