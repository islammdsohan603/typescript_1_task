interface userdata {
  name: string;
  age: number;
}

interface UserRole extends userdata {
  role: string;
}

const user: UserRole = {
  name: "sohan",
  age: 22,
  role: "Software Developer",
};

// console.log(user);

type Vehicle = {
  brand: string;
};

type Car = Vehicle & {
  model: string;
};

const car: Car = {
  brand: "BMW",
  model: "89eEe",
};

// console.log(car);

interface IEmployee {
  name: string;
}

interface IEmployee {
  id: number;
}

const employee: IEmployee = {
  id: 864,
  name: "ABEE",
};

console.log(employee);
