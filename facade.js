class Sport {
  constructor(model) {
    this.model = model;
  }

  startEngine() {
    console.log(`Starting engine of Sport car: ${this.model}`);
  }

  stopEngine() {
    console.log(`Stopping engine of Sport car: ${this.model}`);
  }
}

class Compact {
  constructor(model) {
    this.model = model;
  }

  startEngine() {
    console.log(`Starting engine of Compact car: ${this.model}`);
  }

  stopEngine() {
    console.log(`Stopping engine of Compact car: ${this.model}`);
  }
}

// Класс фасад
class CarFacade {
  constructor(sportModel, compactModel) {
    this.sportCar = new Sport(sportModel);
    this.compactCar = new Compact(compactModel);
  }

  startAllEngines() {
    this.sportCar.startEngine();
    this.compactCar.startEngine();
  }

  stopAllEngines() {
    this.sportCar.stopEngine();
    this.compactCar.stopEngine();
  }
}

// Использование 
const carFacade = new CarFacade("Ferrari 488", "Honda Fit");

carFacade.startAllEngines();

carFacade.stopAllEngines();

//класс CarFacade предоставляет упрощенный интерфейс для управления машинами классов Sport и Compact. 
// Методы startAllEngines и stopAllEngines позволяют запускать и останавливать двигатели всех машин через фасад, не взаимодействуя напрямую с классами Sport и Compact.
