 const User:{
    name:string,
     email:string,
     password:string,
 }={
    name:'md. sohan',
     email:'islammdsohan603@gmail.com',
     password:'sohan123'
 }

 console.log(User.name || undefined)

 for (const key in User){
     console.log(key, User[key as keyof typeof User])
 }