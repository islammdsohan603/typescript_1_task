// problem 2- interface

interface Students {
  name: string;
  id: number | string;
  email: string;
  marks?: number[];
  phone?: number;
}

const students: Students[] = [
  {
    id: "sohan",
    name: "sohan islam",
    email: "islammdsohan@gmail.com",
    marks: [78, 98, 89, 85, 91],
  },
  {
    id: 864570,
    name: " islam",
    email: "isl@gmail.com",
    marks: [89, 85, 91],
    phone: 1894864577,
  },
];

console.log(students);

const studectsMarks = students.map((student) => {
  const totalMarks = (student.marks ?? []).reduce((total, mark) => {
    return total + mark;
  }, 0);

  const avgMarks = totalMarks / (student.marks?.length || 1);

  const avg = avgMarks.toFixed(2);

  return {
    name: student.name,
    id: student.id,
    totalMarks,
    avg,
  };
});

console.log(studectsMarks);
