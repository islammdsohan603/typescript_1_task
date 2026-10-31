// userinfo

const userInfo = (name: string, country: string = "Bangladesh"): string => {
  return `${name} - ${country}`;
};

console.log(userInfo("Sohan"));
console.log(userInfo("Rahim", "India"));
