// default parameters

const concatName = (fname: string, lname?: string) => {
  if (!lname) {
    return false;
  }

  return fname + " " + lname;
};
console.log(concatName("SOHAN"));
