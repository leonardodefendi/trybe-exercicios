import { DriveCar } from "./interfaces";

class Car implements DriveCar {
  drive(): void {
    console.log('Drive a normal car');
  }
}

export default Car;