// union types

let value: string | number;

function getProducts(id: string | number) {
  console.log(`Fetching product with id ${id}`);
}

getProducts(123);
getProducts('sohan2026');

type User = {
  id: string;
  name: string;
};

type Admin = {
  isAdmin: boolean;
};

type AdminUser = User & Admin;

const arr: AdminUser = {
  name: 'sohan',
  id: '15sew',
  isAdmin: true,
};

console.log(arr);

// Literal Types

type Action = 'start' | 'stop' | 'pause' | 'submit';

function handleAction(action: Action) {
  console.log(`Action : ${action}`);
}

handleAction('submit');
handleAction('start');
handleAction('pause');
