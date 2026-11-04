interface UserResponse {
  name: string;
  role: string;
}

interface ApiResponse<T> {
  data: T;
  success: boolean;
  statuscode: number;
}

const response: ApiResponse<UserResponse> = {
  data: {
    name: "Sohan",
    role: "Developer",
  },
  success: true,
  statuscode: 200,
};

console.log(response.data.name);
console.log(response.data.role);
