function proceed(){
    document.getElementById("container").style.display = "block";
    document.getElementById("but").style.display = "none";
    }

const crushin = () =>{
document.getElementById("container").style.display = "none";
document.getElementById("after").style.display = "block";


let c = 400;
let final = "";
let yours = document.getElementById('yours').value;
let crush = document.getElementById('crush').value;

let x = yours.length;
let y = crush.length;

let total = (x * y);

let z1 = (c / total);
let z2 = (total * 2 );

let crushed = z1 + z2
 
if (crushed <= 100 && crushed >= 80){
final = "No go area &#128514";
} else if (crushed <= 79 && crushed >= 60){
    final = "You have to look to the other side..hehe &#128518"
} else if  (crushed <= 59 && crushed >= 40){
    final = "You can make this work.. &#128526"
} else {
    final = "Perfect Match, You gotta let this work &#128521"
}

document.getElementById("Final").innerHTML = final;

}

function again(){
    document.getElementById("container").style.display = "block";
    document.getElementById("after").style.display = "none";
    document.getElementById("crush").value = ""
}

    