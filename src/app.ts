// step 1 creact an interface of an animal

interface Animal {
  name: string;
}

// step 2 create and interface of an dog

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: 'Tommy',
  breed: 'Goald',
};

console.log(myDog);
