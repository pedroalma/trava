  const num0 = document.querySelector("#num0");
  const num1  = document.querySelector("#num1");
  const res = document.querySelector("#result")
 function calcular () {
     let val1, val2 ,resp ;
     val1 = num0.value;
     val2 = num1.value;
     if(val1==="" || val2===""){
    res.innerHTML= `Insira valores númericos.`; 
    }else{
      //realizar o calculo 
     resp = val1 + val2;
     
     res.innerHTML = `A soma é ${resp}`;
    }
 }
 function limparTela () {
           num0.value= "";
           num1.value= "";
           res.innerHTML="";
           num0.focus();

 }
  
    /*const num0 = document.getElementById("num0").value
    const num1 = document.getElementById("num1").value
    */
 /*  resp = a + b 
document.getElementById("#valor").innerHTML = `${resp}` 
}
*/