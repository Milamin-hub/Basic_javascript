let username = "Uno";
let greeting = "hi"; 

function showName() {
    username = "you";
    const massage = username + ": " + greeting;   
    console.log(massage);
}

console.log(username);

showName();

console.log(username);

sayHi("Andrew")

function sayHi(name) {
  console.log( `hi, ${name}` )
}

let sayMe = () => { 
    for (a in username)
    console.log(`Hello!, ${username}`)
    a += 1
}

sayMe();

let z = ["a", "b", "c"];
let index;
let x = 0;
for (index = 0; index < z.length; ++z) {
    console.log(z[index]);
    x += 1
    if (index = x){
        console.log(z[index]);
        x += 1
    } 
    if (index = x) {
        console.log(z[index]);
    }
}


let q = ["wfqw", "rhrtjt", "ehtjy", 'sfdsd'];
let ink;
for (ink = q.length - 1; ink >= 0; --ink) {
    console.log(q[ink]);
}


let obj1 = {
    age: [],
    color: "#ff000"
}

const col1 = "#ff000"
const col2 = "#ff100"
const col3 = "#ff200"
const col4 = "#ff300"
obj1.color = [`${col1}, ${col2}, ${col3}, ${col4}`]

obj1.age = [11, 12, 18, 32, 67]

console.log(String(obj1.color || obj1.age))


let obj2 = {
    login: ["Hie"],
    age: 17,
    password: "2578fjoj"

};


for(let key in obj2){
    console.log(obj2[key])
}



const test = {
    num: 7,
    fun: function() {
        return this.num
    } 

}

console.log(test.fun())
