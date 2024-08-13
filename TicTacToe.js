var joueurO='';
var joueurX='';
var tour='X';
var continuer=true;
var vainqueur=false;
var nbclick=0;
const jo=document.getElementById('jo');
const jx=document.getElementById('jx');
jx.style.backgroundImage='linear-gradient(15deg, #13547a 0%, #80d0c7 100%)';

const zones=document.querySelectorAll('.zone');
const res=document.getElementById('resultat');

const combinaisonG=['012','345','678','036','147','258','048','246']

zones.forEach(function(e,i){
    e.addEventListener('click',function(){

        if(!e.textContent && continuer){
            nbclick++;
            if(tour=='X'){
                joueurX+=i.toString();
            }
            else{
                joueurO+=i.toString();
            }
            e.textContent=tour;
            verifGagne()
            if(!vainqueur){
                changerJ();}
         }
        
    })
})

function exist(a,b){
    for(let i=0;i<a.length;i++){
        if(!b.includes(a[i])){
            return false;
        }
    }
    return true;
}

const verifGagne=()=>{
    combinaisonG.forEach((c)=>{
        if (tour=='O'){
             if(exist(c,joueurO)){
                res.innerHTML='Joueur O à gagner';
                vainqueur=true;
                continuer=false;
             }
            }
        else{
            if(exist(c,joueurX)){
                res.innerHTML='Joueur X à gagner'
                vainqueur=true;
                continuer=false;
            }
        if(nbclick==9 && !vainqueur){
            res.innerHTML='Egalité'
        }
        }

    })

}

const changerJ=()=>{
    if (tour=='O'){
        tour='X'
        jx.style.backgroundImage='linear-gradient(15deg, #13547a 0%, #80d0c7 100%)';
        jo.style.backgroundImage='linear-gradient(to top, #c71d6f 0%, #d09693 100%)';
    }
    else{
        tour='O';
        jo.style.backgroundImage='linear-gradient(15deg, #13547a 0%, #80d0c7 100%)';
        jx.style.backgroundImage='linear-gradient(to top, #c71d6f 0%, #d09693 100%)';
    }
}

document.getElementById('btr').addEventListener('click',()=>{
    document.location.reload(true);

})