EvaluandoDatos(19)

function EvaluandoDatos(num){
    var texto = "Lorem ipsum"
    if (num >= 18){
        texto = "Mayor de edad"
    }else{
        return
    }
}

// Ej1
a = Param1(5)
console.log(a)

function Param1(p1){
    var res = p1 * 5
    return res
}

// Ej2
b = Param2(4,6)
console.log(b)

function Param2(p1,p2){
    var res = p1 * p2
    return res
}

// Ej3
Param3(7,8)

function Param3(p1,p2){
    if (p1>p2){
        console.log("El primer parametro es mayor.")
    } else if(p2>p1){
        console.log("El segundo parametro es mayor.")
    } else {
        return
    }
}