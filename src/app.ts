// typeof type guard

function display(val: string | number) {
  if (typeof val === 'string') {
    console.log(val.toUpperCase());
  } else {
    console.log(val.toFixed(2));
  }
}

display(`my name is sohan Islam `); // Output: HELLO
display(3.14159); // Output: 3.14

// in operator type guard

type Car = {
  drive: () => void;
};

type Boat = {
  sail: () => void;
};

function operate(vehicle: Car | Boat) {
  if ('drive' in vehicle) {
    vehicle.drive();
  } else {
    vehicle.sail();
  }
}

operate({ drive: () => console.log('Driving a car') }); // Output: Driving a car
operate({ sail: () => console.log('Sailing a boat') }); // Output: Sailing a boat
