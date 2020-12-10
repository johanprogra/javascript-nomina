Liquidar=function(){
   var salario=document.getElementById("salario1").value;
   var nocturna=document.getElementById("exnocturnas").value;

   var ordinario=parseInt(salario)/240;
   
   var recargo1=ordinario*0.35;
   
   var total=parseInt(nocturna)*recargo1;
   if(salario=="" || nocturna==""){
      alert("Faltan campos por llenas")
   }else{
      document.getElementById("exordinaria").value=ordinario.toFixed(2);
      document.getElementById("recargo").value=recargo1.toFixed(2);
      document.getElementById("total").value=total.toFixed(2);
   }


}