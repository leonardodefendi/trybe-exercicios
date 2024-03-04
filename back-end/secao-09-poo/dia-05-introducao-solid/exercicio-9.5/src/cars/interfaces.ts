export interface DriveCar {
  drive(): void;
}

export interface FlightCar {
  fly(): void;
}

export interface IVehicle extends DriveCar, FlightCar{};