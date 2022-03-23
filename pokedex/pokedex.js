/*API: Servicio para consultar y tomar las cosas o informacion que se requieren. 
Son importantes porque son el puente entre el BackEnd y el FrontEnd.

Programacion asincrona es como realizar distintas tareas a la vez, una consulta
al server es programacion asincrona*/ 

//fetch es la forma  en que se hace una consulta a una API
 const fetchPokemon = () =>{
    const pokeName=document.getElementById("pokeName");
    let pokeInput=pokeName.value.toLowerCase();
    const url=` https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res)=> {
        if(res.status != "200"){
            console.log(res);
            pokeImage("./assets/img/pokemon-sad.gif");
        }
        else{
            return res.json();
        }
    }).then((data)=>{
        console.log(data);
        let type1=data.types[0].type.name;
        let hp=data.stats[0].base_stat;
        let attack=data.stats[1].base_stat;
        let defense=data.stats[2].base_stat;
        let special_attack=data.stats[3].base_stat;
        let special_defense=data.stats[4].base_stat;
        let speed=data.stats[5].base_stat;
        let pokeImg=data.sprites.front_default;
        let mov1=data.moves[0].move.name;
        let mov2=data.moves[1].move.name;
        let number=data.order;
        console.log(pokeImg);
        pokeImage(pokeImg);
        pokeHp(hp);
        pokeATK(attack);
        pokeDEF(defense);
        pokesATK(special_attack);
        pokesDEF(special_defense);
        pokeSPD(speed);
        pokeMov(mov1,mov2);
        pokeType1(type1);
        pokeNumber(number);
    })    
    //una promesa es como decir "Espera, ahorita te mando la info, espera a que termine de procesar"
}
fetchPokemon();
//Cambia la imagen
const pokeImage=(url) =>{
    const pokeImg=document.getElementById("pokeImg");
    pokeImg.src=url;
}
const pokeHp=(hp)=>{
    const pokeHp=document.getElementById('hp').innerHTML = `<span>Hp: </span> ${hp}`;
}
const pokeATK=(attack)=>{
    const pokeATK=document.getElementById('attack').innerHTML = `<span>ATK: </span> ${attack}`;
}
const pokeDEF=(defense)=>{
    const pokeDEF=document.getElementById('defense').innerHTML = `<span>DEF: </span> ${defense}`;
}
const pokesATK=(special_attack)=>{
    const pokesATK=document.getElementById('special_attack').innerHTML = `<span>Special-Attack: </span> ${special_attack}`;
}
const pokesDEF=(special_defense)=>{
    const pokesDEF=document.getElementById('special_defense').innerHTML = `<span>Special-Defense: </span> ${special_defense}`;
}
const pokeSPD=(speed)=>{
    const pokeSPD=document.getElementById('speed').innerHTML = `<span>Speed: </span> ${speed}`;
}

const pokeMov=(mov1,mov2)=>{
    const pokeMov= document.getElementById('mov').innerHTML =`<span>Mov 1: ${mov1} <br> Mov 2: ${mov2}</span>`;
}

const pokeType1=(type1)=>{
    const pokeType1= document.getElementById('pokeElement').innerHTML =`<span>Type: ${type1}</span>`;
}
const pokeNumber=(number)=>{
    const pokeNumber=document.getElementById('pokeNumber').innerHTML = `<span># </span> ${number}`;
}