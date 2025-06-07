let naam = document.querySelector("#name");
let number = document.querySelector("#number");
let email = document.querySelector("#email");

let summary = document.querySelector(".summary");

let tenth = document.querySelector(".tenth");
let twelth= document.querySelector(".twelth");
let degree = document.querySelector(".degree");

let s1 = document.querySelector(".s1");
let s2 = document.querySelector(".s2");
let s3 = document.querySelector(".s3");
let s4 = document.querySelector(".s4");
let s5 = document.querySelector(".s5");

let address = document.querySelector(".address");

let soft1 = document.querySelector(".soft1");
let soft2 = document.querySelector(".soft2");
let soft3 = document.querySelector(".soft3");
let soft4 = document.querySelector(".soft4");
let soft5 = document.querySelector(".soft5");

let btn = document.querySelector(".btn");
let b = document.querySelector(".b");

let resumepaper = document.querySelector(".resumepaper");

let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let input3 = document.querySelector(".input3");
let input4 = document.querySelector(".input4");
let input5 = document.querySelector(".input5");
let input6 = document.querySelector(".input6");
let input7 = document.querySelector(".input7");
let input8 = document.querySelector(".input8");
let input9 = document.querySelector(".input9");
let input10 = document.querySelector(".input10");
let input11= document.querySelector(".input11");
let input12=document.querySelector(".input12");
let input13=document.querySelector(".input13");
let input14=document.querySelector(".input14");
let input15=document.querySelector(".input15");
let input16=document.querySelector(".input16");
let input17= document.querySelector(".input17");





btn.addEventListener('click', ()=>{
// console.log("ashir");
input1.innerText= naam.value;
input2.innerText= number.value;
input3.innerText= email.value;

input4.innerText= summary.value;
input5.innerText=tenth.value;
input6.innerText=twelth.value;
input7.innerText=degree.value;
input8.innerText=s1.value;
input9.innerText=s2.value;
input10.innerText=s3.value;
input11.innerText=s4.value;
input12.innerText=s5.value;
input13.innerText=soft1.value;
input14.innerText=soft2.value;
input15.innerText=soft3.value;
input16.innerText=soft4.value;
input17.innerText=soft5.value;




});

   function download() {
            var a = document.body.appendChild(
               document.createElement("a")
            );
           a.download = "newfile.pdf";
         //   a.size = 15,15;
           a.href = "data:text/html" + document.getElementById("resumepaper").innerText;
           a.click(); //Trigger a click on the element
        }




