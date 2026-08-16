"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = {
    name: 'md. sohan',
    email: 'islammdsohan603@gmail.com',
    password: 'sohan123'
};
console.log(User.name || undefined);
for (const key in User) {
    console.log(key, User[key]);
}
//# sourceMappingURL=spart.js.map