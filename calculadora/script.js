var valor;
var result;

function botao(num){
    valor= document.calculadora.visor.value += num;

}

function limpar(){
    document.calculadora.visor.value = "";
}
function apagar(){
    let numero = document.calculadora.visor.value;
    document.calculadora.visor.value = numero.substring(0, numero.length-1);
}
function resultado(){
    var op = document.getElementById("visor").value;
    document.getElementById("visor").innerHTML = op;
    var expression = new String(op);

    for(var i= 0; i <  expression.length; i++){                
         if(expression.charAt(i) == "+"){         
            var numbers = new String(expression.split('+'));
            n1 = numbers.substring(0, numbers.indexOf(','));
            n2 = numbers.substring(numbers.indexOf(',') +1, numbers.length);
            var resultadoFinal = parseInt(n1) + parseInt(n2);
            document.getElementById("visor").value = resultadoFinal;       
            break;
         }else if(expression.charAt(i) == "-"){         
            var numbers = new String(expression.split('-'));
            n1 = numbers.substring(0, numbers.indexOf(','));
            n2 = numbers.substring(numbers.indexOf(',') +1, numbers.length);
            var resultadoFinal = parseInt(n1) - parseInt(n2);
            document.getElementById("visor").value = resultadoFinal;       
            break;
         } else if(expression.charAt(i) == "*"){         
            var numbers = new String(expression.split('*'));
            n1 = numbers.substring(0, numbers.indexOf(','));
            n2 = numbers.substring(numbers.indexOf(',') +1, numbers.length);
            var resultadoFinal = parseInt(n1) * parseInt(n2);
            document.getElementById("visor").value = resultadoFinal;       
            break;
         } else if(expression.charAt(i) == "/"){         
            var numbers = new String(expression.split('/'));
            n1 = numbers.substring(0, numbers.indexOf(','));
            n2 = numbers.substring(numbers.indexOf(',') +1, numbers.length);
            var resultadoFinal = parseInt(n1) / parseInt(n2);
            document.getElementById("visor").value = resultadoFinal;       
            break;
         } 
    }

}