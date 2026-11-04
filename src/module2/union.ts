// in operator

type Bird = { fly: () => void };
type Fish = { swim: () => void };

const move = (animal: Bird | Fish) => {
  if ("fly" in animal) {
    animal.fly();
    return;
  }

  animal.swim();
};

// discriminated union

interface Circl {
  kind: "circle";
  redius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

const getArea = (shape: Circl | Square) => {
  if (shape.kind === "circle") {
    console.log(shape.redius);
  } else {
    console.log(shape.sideLength);
  }
};

getArea({
  kind: "circle",
  redius: 4,
});
