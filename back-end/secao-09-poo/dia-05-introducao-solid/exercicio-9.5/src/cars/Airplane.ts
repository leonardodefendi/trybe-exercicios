import { FlightCar } from "./interfaces";

class Airplane implements FlightCar {
  fly(): void {
    console.log('This veichle can fly');
  }
}

export default Airplane;