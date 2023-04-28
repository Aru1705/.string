//stirng lenght
function length()
{
let count =String(document.getElementById("text").value);
let length =count.length;
document.getElementById("demo1").innerHTML=length;
}

//stirng slice
function slice() {
    let count1 = String(document.getElementById("textslice").value);
    let a = Number(document.getElementById("first-slice").value);
    let b = Number(document.getElementById("end-slice").value) ;
    let c = count1.slice(a,b);
    document.getElementById("demo2").innerHTML=c ;   
}

//stirng substring
function str() {
    let str = String(document.getElementById("textstr").value);
    let d = Number(document.getElementById("firstslc").value);
    let e = Number(document.getElementById("endslc").value); 
    let f = str.substring(d,e);
    document.getElementById("demo3").innerHTML=f ;   
}

//replacing string content
function replaceme()
{
    let count =String(document.getElementById("replace").value);
    let a= String(document.getElementById("firstword").value);
    let b = String(document.getElementById("secondword").value);
    let c= count.replace(a,b);
document.getElementById("demo4").innerHTML=c;
}


//replace all
function replaceall()
{
    let count =String(document.getElementById("replace-all").value);
    let a= String(document.getElementById("first-line").value);
    let b = String(document.getElementById("second-line").value);
    let c= count.replaceAll(a,b);
document.getElementById("demo5").innerHTML=c;
}
//uppercase
function textupper()
    {
        let count =String(document.getElementById("textcase").value);
        let textupper = count.toUpperCase();
        document.getElementById("demo6").innerHTML=textupper;

    }
//lower case    
    function textlower()
    {
        let count =String(document.getElementById("textcase").value);
        let textlower = count.toLowerCase();
        document.getElementById("demo7").innerHTML=textlower;

    }
