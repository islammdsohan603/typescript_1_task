// type alias

type User = {
  name: string;
  age: number;
  email: string;
};

// define interface

interface UserProfile {
  name: string;
  age: number;
  email: string;
}

// marge the

interface Person {
  name: string;
}

interface Person {
  age: number;
}

const info: Person = {
  name: 'sohan',
  age: 20,
};

console.log(info);
