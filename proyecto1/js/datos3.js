enviar=function(){

 try{
    var num1,num2,num3,num4,num5;   
    var ex=document.getElementById("excelente1");
    var re=document.getElementById("regular1");
    var no=document.getElementById("no1");
    
    if(ex.checked==true){
        num1=3;
    }else if(re.checked==true){
        num1=2;
    }else if(no.checked==true){
        num1=1;
    }
    var s=document.getElementById("si2");
    var n=document.getElementById("no2");
    if(s.checked==true){
        num2=2;
    }else if(n.checked==true){
        num2=1;
    }
    var s22=document.getElementById("si3");
    var n22=document.getElementById("no3");
    var tal11=document.getElementById("talvez1");
    if(s22.checked==true){
        num3=3;
    }else if(n22.checked==true){
        num3=2;
    }else if(tal11.checked==true){
        num3=1;
    }
    
    var s2=document.getElementById("si4");
    var n2=document.getElementById("no4");
    var tal=document.getElementById("talvez2");
    if(s2.checked==true){
        num4=3;
    }else if(n2.checked==true){
        num4=2;
    }else if(tal.checked==true){
        num4=1;
    }
    var ex2=document.getElementById("excelente2");
    var re2=document.getElementById("regular2");
    var no3=document.getElementById("no5");
    if(ex2.checked==true){
        num5=3;
    }else if(re2.checked==true){
        num5=2;
    }else if(no3.checked==true){
        num5=2;
    }
    
    var result=num1+num2+num3+num4+num5;
    if(result>10){
    alert("Gracias por preferir nuestro servicio")
    }else if(result<10){
        alert("Estaremos mejorando con tu opinión")
    }else{
        alert("faltan campos por llenarse")
    }
 }catch(error){
     alert("faltan campos por llenar")
 }



}