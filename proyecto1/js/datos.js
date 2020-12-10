Liquidar=function(){
    
    var n1=document.getElementById("Salario").value;
    var n2=document.getElementById("dias").value;
    var sueldo=parseInt(n1)/30*parseInt(n2);

   
    if(n1>1755606){
    subtras=0;

    }else{
        subtras=102845/30*n2;
 
    }
    var n3=document.getElementById("otros").value;
    
    var hed=document.getElementById("hed").value;
    var hen=document.getElementById("hen").value;
    var hedf=document.getElementById("hedf").value;
    var henf=document.getElementById("henf").value;

    vrhed=((n1/240)*hed)*1.25;
    vrdf=((n1/240)*hed)*2;
    vrhen=((n1/240)*hed)*1.75;
    vrhednf=((n1/240)*hed)*2.5;

    totalextras=parseInt(vrhed)+parseInt(vrdf)+parseInt(vrhen)+parseInt(vrhednf);
   
    
    var totaldevengado=parseInt(sueldo)+parseInt(subtras)+parseInt(n3);
    

    var eps1=parseInt(n1)*0.4;
    var pension1=parseInt(n1)*0.4;
    if(totaldeve>=3511202){
        fondo=totaldeve*0.1;
        document.getElementById("fondoli").value=fondo.toFixed(2);
    }else{
        fondo=0;
        document.getElementById("fondoli").value=fondo;
    }
    var otros1=document.getElementById("otrosdedu").value;
    var tdeducido=(parseInt(eps1)+parseInt(pension1)+parseInt(fondo)+parseInt(otros1));
  
    var tneto=parseInt(tdeducido)-parseInt(n1);
  
if( sueldo=="" || subtras=="" || totalextras=="" || totaldevengado=="" || eps1=="" || pension1=="" || tdeducido==""|| tneto==""){
alert("Faltan campos por llenas")

}else{
    document.getElementById("basico").value=sueldo.toFixed(2);
    document.getElementById("sutran").value=subtras.toFixed(2);
    document.getElementById("sutran").value=subtras.toFixed(2);
    document.getElementById("totalex").value=totalextras.toFixed(2);
    document.getElementById("totaldeve").value=totaldevengado.toFixed(2);
    document.getElementById("eps").value=eps1;
    document.getElementById("fondo").value=pension1;
    document.getElementById("totaldedu").value=tdeducido;
    document.getElementById("neto").value=tneto;
}

}