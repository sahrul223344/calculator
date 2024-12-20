function appendToResult(value){
 const input =  document.getElementById('input')
 input.value += value
}

function clearInput(){
  const input =  document.getElementById('input')
  input.value = ''
}

function calculatorInput(){
  const input =  document.getElementById('input')
  try{
    input.value = eval(input.value)
  }catch(eror){
    input.value ="eror"
  }
  
}