
var i =0;
var tableau =[];
let som;
document.getElementById('envoyer-1').addEventListener("click",()=>{
    var taille =document.getElementById("taille").value;
    console.log(taille)

    document.getElementById("envoyer-2").addEventListener("click",()=>{
        if( i < taille){
            var chiffre = document.getElementById('tab').value;

            tableau.push(chiffre);
            console.log(tableau)
            i++;
        } else{
            
            document.getElementById("envoyer-2").addEventListener("mouseover" ,()=>{
                document.getElementById("envoyer-2").value="generate!";
                document.getElementById("moyenne").textContent= moyenne(tableau);

                document.getElementById("variance").textContent= variance(tableau);

                document.getElementById("ecart-type").textContent= ecartType(tableau);
            })
        }
    })
})

function moyenne(tableau){
    var sum =0;
    for(var i =0 ;i< tableau.length ;i++){
        sum +=Number(tableau[i])
    }
     let calcul = sum/tableau.length;
     console.log(calcul,",moyenne");
     return calcul;
}

function variance(tableau){
    var moy =moyenne(tableau);
    var sum =0
    for( var i=0; i<tableau.length ;i++){
        sum += (Number( tableau[i] - (moy))) *(Number( tableau[i] - (moy)))/tableau.length;
        return sum;
    }
}
function ecartType(tableau){
    let a = variance(tableau);
     return Math.sqrt(a);
}
document.getElementById("reset-1").addEventListener("click" ,()=>{
    document.location.reload(true);
})
document.getElementById("reset-2").addEventListener("click" ,()=>{
    document.location.reload(true);
})



