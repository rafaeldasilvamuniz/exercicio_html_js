function maior(){
  const num1 = parseFloat(document.getElementById("n1").value);
  const num2 = parseFloat(document.getElementById("n2").value);

  //const maior = num2;

  if(num2>num1){
    alert("O valor " +num2+ " é maior que o valor " +num1+ ".");
  }else{
    alert("O número "+num1+" é maior que o número "+num2+". Favor digitar um valor maior para o número 2.");
  }
}