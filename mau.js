
//array practice
const x=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
const isGreater=(value)=>value>8;
const z=(value)=>value/2;
const b=x.filter(isGreater).map(z)
console.log(b)


const names=["Al", "Sam", "Katherine", "Jo", "Alexandra"] 
const overFour=(element)=>element.length>4
const uppies=(element)=>element.toUpperCase();  
const y=names.filter(overFour).map(uppies)
console.log(y)

const sentence=["hello there friend", "javascript is fun", "keep going"] ;
const fisrtCapitalized= (sentence)=>{
   return sentence.split(' ')[0].toUpperCase()    
}
const h=sentence.map(fisrtCapitalized)
console.log(h)





const users = [
    { name: "Alexandra", age: 29 },
    { name: "Sam", age: 17 },
    { name: "Katherine", age: 34 },
    { name: "Jo", age: 15 }
];

/*const checkAge=(age)=>{
    age>=18;
}*/

const adult_users=users.filter(users=>users.age>18).map(users=>users.name);





const user=[
    {name:'Alexendra',age:29},{name:'troy',age:90},{name:'monica',age:9}
]
const Adult_names=user.filter(value=>value.age>=18).map(value=>value.name)

const p = [
    { name: "Alexandra", age: 29, skills: ["JavaScript", "Python", "SQL"] },
    { name: "Sam", age: 17, skills: ["HTML"] },
    { name: "Katherine", age: 34, skills: ["React", "Node", "MongoDB"] },
    { name: "Jo", age: 15, skills: [] }
];
const new_names=p.filter(user=>user.skills.length>1).map(user=>user.name)
console.log(new_names)