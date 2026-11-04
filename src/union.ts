const printAll = (x: string | string[] | null) => {
  if (x !== null) {
    if (typeof x === "object") {
      for (let str of x) {
        console.log(str);
      }
      return;
    }
    console.log(x);
    return;
  }
  console.log("");
};

printAll(["sohan", "sohag"]);
