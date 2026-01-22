var a=10;
var b="20";
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

var a=10;
var b=20;
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
console.log(a==b);
console.log(a!=b);
console.log(a===b);
console.log(a!==b);


add(10,20);
var c;
function add(a,b){
    c=10;
    console.log(a+b+c);
}


//Arrow Function
var add = (a,b)=>{
    console.log(a+b);
}
add(10,20);

var arr1=[10,20,30];
var arr2=[...arr1,40,50,60];
console.log(arr2);


var [m1,m2,m3,m4,m5]=[89,90,99,96,87]
console.log(m1);
console.log(m2);
console.log(m3);
console.log(m4);
console.log(m5);

var {name,age,Dept,marks}={
    name:"Bhavana",
    age:20,
    Dept:["CS","DS"],
    marks:{
        Mern:90,
        java:87,
        python:80
    }

}
 console.log(name);
console.log(age);
console.log(Dept);
console.log(marks);