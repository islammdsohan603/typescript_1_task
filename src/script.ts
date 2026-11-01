// students tuple createing now

type students = {
  name: string;
  age: number;
  result: number;
};

const student1: students = {
  name: "John",
  age: 20,
  result: 85,
};

const student2: students = {
  name: "Alice",
  age: 22,
  result: 90,
};

console.log(`Student 1:`, student1);
console.log(`Student 2:`, student2);

const studentsArray: students[] = [student1, student2];
console.log(`Students Array:`, studentsArray);

// students array with map method

const studentNames = studentsArray.map((student) => {
  return student.name;
});

console.log(`Student Names:`, studentNames);
