Liquidar=function(){
    var fechaini=new Date(document.getElementById('fechac').value);
    var fechafin=new Date(document.getElementById('fechad').value);
    var diasdif=fechafin.getTime()-fechaini.getTime();
    var contdias=Math.round(diasdif/(1000*60*60*24));

    
    var salario=document.getElementById("salarioc").value;
    var cesan=(parseInt(salario)*parseInt(contdias))/360;

    var intcesan=((cesan*0.12*contdias)/360);
 
    var prim=((salario*contdias)/360);
   
    var vac=((salario*contdias)/720);
   
    var total=cesan+intcesan+prim+vac;
    
        if(fechaini<0 || fechafin<0 || salario==""){
            alert("Faltan campos por llenas")
            
        }
            else{
                document.getElementById("cantidaddias").value=contdias;
                document.getElementById("cesantias").value=cesan.toFixed(2);
                document.getElementById("interesc").value=intcesan.toFixed(2);
                document.getElementById("prima").value=prim.toFixed(2);
                document.getElementById("vacaciones").value=vac.toFixed(2);
                document.getElementById("total").value=total.toFixed(2);
            }
        
   
    
}
