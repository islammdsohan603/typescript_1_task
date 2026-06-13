function greet(firstName: string, lastname: string, title?: string): string {
  return `Hello ${firstName} ${lastname} ${title}`;
}

console.log(greet('MD.', 'Sohan', 'Web Developer'));
