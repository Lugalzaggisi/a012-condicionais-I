let idade= prompt("insira a idade")
let isMaiorIdade; 
let isCursandoOutraFaculdade = prompt("você está cursando faculdade?") //prompt("você está cursando faculdade?")
// if (isMaiorIdade === "sim" ^ "s"){
//     isMaiorIdade=true
// }else{
//     isMaiorIdade=false
// }
// // if(isCursandoOutraFaculdade = "sim" ||"s" ){
// //     isCursandoOutraFaculdade = true
// // }else if(isCursandoOutraFaculdade = "não" || "n") {
// //     isCursandoOutraFaculdade = false
// // }else{
// //     console.log("dado inválido")
// }
//terminei a frescura, agora o exercício
if(idade >=18){
    isMaiorIdade=true
    console.log("é maior de idade")
}else{
    isMaiorIdade=false
    console.log("é menor de idade")	
}

if(isCursandoOutraFaculdade === "sim"){
    isCursandoOutraFaculdade === true //não sei se está servindo pra algma coisa
    console.log("terminou o ensino médio")
}else{
    isCursandoOutraFaculdade === false
    console.log("pode não ter terminado o ensino médio")
}

if(isCursandoOutraFaculdade === "sim"){
    console.log("está cursando faculdade")
}else{
    console.log("não está cursando faculdade")
}