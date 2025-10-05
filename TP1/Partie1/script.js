//Exercice 1
var a=10;
let b=5;
const c=15;
{
    let d=30;
    console.log(d);
    b=20;
    console.log(b);
}
console.log(b);

//exercice 2
function somme(a,b){return a+b;}
const somme2 = (a,b) => a+b;

console.log(somme2(5,10));

//exercice 3
const user={name:"Ghazi",age:21,city:"Gafsa"};

let username=user.name;
let userage=user.age;


console.log(user.name);
console.log(user.age);
console.log(user.city);



//exercice 4
tab1=[1,2,3];
tab2=[4,5,6];
tab3 = [...tab1, ...tab2];
console.log(tab3);