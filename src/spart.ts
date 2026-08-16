
const projectPrice:number[]=[1240,4589,25,698,47,689,58,69,258,78]


const totalPrice:number=projectPrice.reduce((total:number,index:number):number=> (
    total + index
)  )
console.log(totalPrice)