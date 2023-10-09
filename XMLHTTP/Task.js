const Obj1={Name: "Person",age:5};
const Keys1=(Object.keys(Obj1).sort())
console.log(Keys1);

console.log(JSON.stringify(Keys1))

const Obj2={age:5,Name:"Person1"};
const Keys2=(Object.keys(Obj2).sort())
console.log(Keys2);
if(JSON.stringify(Keys1)===JSON.stringify(Keys2)){
   console.log("Equal")
}else
{
    console.log("Not Equal")
}
