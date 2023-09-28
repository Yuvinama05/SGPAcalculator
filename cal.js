let form =document.forms['SGPA'];
let cs=form.cs;
let ll=form.ll;
let math=form.math;
let ep=form.ep;
let epl=form.epl;
let bme=form.bme;
let bce=form.bce;
let mpw=form.mpw;
let bcel=form.bcel;
let caeg=form.caeg;
let sodeca=form.sodeca;

let sgpa=document.getElementById("sgpa");

let CS;
let LL;
let MATH;
let EP;
let EPL;
let BME;
let BCE;
let MPW;
let BCEL;
let CAEG;
let SODECA;
let SGPA;

let total=0;

cs.onchange=function(){
    CS= +this.value;
}
ll.onchange=function(){
    LL= +this.value;
}
math.onchange=function(){
   MATH= +this.value;
}
ep.onchange=function(){
    EP= +this.value;
}
epl.onchange=function(){
    EPL= +this.value;
}
bme.onchange=function(){
    BME= +this.value;
}
bce.onchange=function(){
    BCE= +this.value;
}
mpw.onchange=function(){
    MPW= +this.value;
}
bcel.onchange=function(){
    BCEL= +this.value;
}
caeg.onchange=function(){
    CAEG= +this.value;
}
sodeca.onchange=function(){
    SODECA= +this.value;
}
form.onsubmit=function(f){
    f.preventDefault(); 
    SGPA =( (CS*2) + (LL*1) + (MATH*4) +(EP*4) + (EPL*1) + (BME*2) + (BCE*2) + (SODECA*.5) + (MPW*1.5) + (BCEL*1) + (CAEG* 1.5) ) /20.5;

    SGPA.toFixed(2);
    sgpa.textContent=`Your SGPA is : ${ SGPA.toFixed(2)}`;

}

