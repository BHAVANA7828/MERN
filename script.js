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

let arr=[10,20,30,40];
//for(variable variable_name in array_name)
for (let i in arr){
    console.log(i,arr[i]);
}

//var obj={
  //  name:"Bhavana",
    //age:20,
//}

//for(let i in obj){
  //  console.log(i,obj[i]);

//}


for(let val of arr){
    console.log(val);
}


var double_arr=arr.map((i)=>(i*2));
console.log(double_arr);

var even=arr.filter((i)=>(i%2===0))
console.log(even);

var total=arr.reduce((sum,i)=>(sum),0);
console.log(total);

var total_sum=arr.map((num)=>num*2).filter((num)=>(num%2===0)).reduce((sum,num)=>(sum+num),0);
console.log(total_sum);

var n=7;
var flag=true;
if(n<=1) flag=false;
else{
    for(let i=2;i<=n/7;i++){
        if(n%i===0){
            flag=false;
            break;
        }
    }
}
console.log(flag?"Prime":"not Prime");

var add=(a,b,callback)=>{
    var result=a+b;
    callback(result);
}
add(10,20,(res)=>{console.log(res)})

var main=(callback)=>{
    console.log("I am callback");
    callback()
}

var demo=()=>{
    console.log("I am callback");
}
var main=(myFunction)=>{
    myFunction()
}

main(demo)
var promise =new Promise((resolve,reject)=>{
    var success=true;
    if(success){
        setTimeout(()=>{
        resolve("Promise Resolved");  
        },5000)
    }
    else{
        reject("Promise Rejected");
    }
})
promise.then((res)=>console.log(res))
.catch((err)=>console.log(err)
)
//API



const getData=async()=>{
    try{
        var res=await fetch('https://jsonplaceholder.typicode.com/posts')
        var data=await res.join();
        console.log(data);
    
   }catch(err){
    console.log(err);
    
   }
}
getData();

