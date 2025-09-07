import { AbrigoAnimais } from "./abrigo-animais.js";

const abrigoAnimais = new AbrigoAnimais()

const resultado = abrigoAnimais.encontraPessoas('BOLA,LASER',
      'BOLA,NOVELO,RATO,LASER', 'Mimi,Fofo,Rex,Bola')
console.log(resultado)
