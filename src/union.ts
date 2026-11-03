//* Type assertion

//* as syntax

type Status = "pending" | "approved" | "rejected";

const someStatus: string = "pending";

const showStatus = (status: Status) => {
  console.log("Your current appliction status is " + status);
};

// showStatus(someStatus as Status);
