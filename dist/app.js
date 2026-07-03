"use strict";
// typeof type guard
Object.defineProperty(exports, "__esModule", { value: true });
function display(val) {
    if (typeof val === 'string') {
        console.log(val.toUpperCase());
    }
    else {
        console.log(val.toFixed(2));
    }
}
display(`my name is sohan Islam `); // Output: HELLO
display(3.14159); // Output: 3.14
function operate(vehicle) {
    if ('drive' in vehicle) {
        vehicle.drive();
    }
    else {
        vehicle.sail();
    }
}
operate({ drive: () => console.log('Driving a car') }); // Output: Driving a car
operate({ sail: () => console.log('Sailing a boat') }); // Output: Sailing a boat
//# sourceMappingURL=app.js.map