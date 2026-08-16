const objectItem:{name:string,email:string} = {
    name:"sohan",
    email:"islammdsohan603@gmail.com"
}


for(const key in objectItem){
    console.log(key,objectItem[key as keyof typeof objectItem]);
}