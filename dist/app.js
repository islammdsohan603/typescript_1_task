"use strict";
// type narrowing
Object.defineProperty(exports, "__esModule", { value: true });
function log(value) {
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
log('hello'); // Output: HELLO
log(3.14159); // Output: 3.14
//# sourceMappingURL=app.js.map