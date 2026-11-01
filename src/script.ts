// Rest Parameters

function calculateTotal(...marks: number[]): number {
  return marks.reduce((total, mark) => total + mark, 0);
}

const marks = [85, 90, 78, 92, 89, 79, 98];

const totalMarks = calculateTotal(...marks);

const averageMarks = marks.length > 0 ? totalMarks / marks.length : 0;

console.log(`Total Marks: ${totalMarks}`);
console.log(`Average Marks: ${averageMarks.toFixed(2)}`);
