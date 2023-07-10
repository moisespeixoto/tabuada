function Tabuada(){
    var num1 = window.document.getElementById('num1')
    var num2 = document.getElementById('num2')
    if (num1.value.length == 0 || num2.value.length == 0){
        window.alert('[ERRO] CONFIRA OS SEUS N°')
    } else{
    var n = Number(num1.value)
    var e = Number(num2.value)
    var x = 0
    var r = ''
    var res = window.document.getElementById('resposta')
    res.innerHTML = `A tabuada do ${n} é: <br>`
    do {
        r = n*x
        res.innerHTML += `${x} X ${n} = ${r} <br>`
        x++
    }   while(x <= e)
}  } 
