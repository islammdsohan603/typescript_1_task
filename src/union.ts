// problam1 literal type

type Status = "active";

const status: Status = "active";
// console.log(status);

// problem2 Basic union

type ProductId = string | number;

function product(id: ProductId) {
  console.log(id);
}

// product("sohan14");

type UserRole = "admin" | "reporter" | "user";

function userDashboard(user: UserRole) {
  if (user === "admin") {
    return "/dashboard/admin";
  } else if (user === "reporter") {
    return "/dashboard/reporter";
  } else {
    return "/dashbord/user";
  }
}

// console.log(userDashboard("admin"));
// console.log(userDashboard("reporter"));
// console.log(userDashboard("user"));

// problem4 object union

type TextNotification = {
  type: "text";
  content: string;
};
type FileNotification = {
  type: "file";
  fileName: string;
  fileUrl: string;
};
type ImageNotification = {
  type: "image";
  content: string;
};

type AppNotification = TextNotification | FileNotification | ImageNotification;

const notification1: AppNotification = {
  type: "text",
  content: "sohanf.tsc",
};
const notification2: AppNotification = {
  type: "image",
  content: "sohan.png",
};
const notification3: AppNotification = {
  type: "file",
  fileName: "ug/elrj",
  fileUrl: "dls;fi",
};

console.log(notification1);
console.log(notification2);
console.log(notification3);
