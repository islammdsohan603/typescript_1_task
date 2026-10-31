// rest parameters(...args)

const sum = (...numbers: number[]) => {
  return numbers.reduce((total, sum) => total + sum, 0);
};

const total = sum(10, 20, 30, 25);

console.log(total);

const logUserAction = (...args: [string, number, boolean]) => {
  const [name, age, maride] = args;

  return name + " " + age;
};

const userStatus = logUserAction("MD SOHAN", 20, false);

console.log(userStatus);
