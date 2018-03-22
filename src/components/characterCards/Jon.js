import React, {Component} from 'react';
import NavCardsButtons from './NavCardsButtons.js';
import styled from "styled-components";

const WrapCharacter= styled.div`
background-color: white;
padding: 40px;
margin:0;
color:black;
font-family: 'Arial';
`;

const WrapHeader= styled.div`
background-color: white;
font-family: 'Arial';
padding: 0px;
margin:0;

@media (min-width: 768px) {
 display: flex;
 align-items: center;
 justify-content: flex-start;
  }
`;
const CharacterImage= styled.img`
border-radius: 50px;
width: 100px;
height: 100px;
`;

const WrapDescription = styled.div`
text-align: left;
@media (min-width: 768px) {
   padding-left: 30px;
     }
`;

const CharacterTittle = styled.h3`
font-size: 20px;
font-weight: bold;
color: black;
justify-content:flex-start;
`;
const CharacterDescription = styled.p`
font-size: 14px;
color: gray;
text-align: left;
`;

class Jon extends Component {

    render(){
        return(
            <WrapCharacter>
                <WrapHeader>
                  <CharacterImage src= "/images/jon.png" />
                  <WrapDescription>
                      <CharacterTittle> Jon Snow </CharacterTittle>
                      <CharacterDescription><strong>Alias: </strong> Aegon Targaryen, Lord Snow,
                        El Bastardo de Invernalia, Lord Cuervo, El Lobo Blanco (serie), El Príncipe Prometido.
                      </CharacterDescription>
                      <CharacterDescription><strong>Nacimiento: </strong>283 DC</CharacterDescription>
                      <CharacterDescription><strong>Familia: </strong>Casa Stark, Casa Targaryen</CharacterDescription> 
                  </WrapDescription>
                </WrapHeader>
                <NavCardsButtons />
                <div>
                <div className ="active"> 
                    <CharacterDescription>
                        Jon Nieve (en inglés, Jon Snow), es un personaje ficticio de la saga de libros Canción de 
                        hielo y fuego del escritor estadounidense George R. R. Martin y de su correspondiente adaptación 
                        televisiva, Juego de tronos. Se trata de uno de los personajes principales, teniendo capítulos 
                        desde su punto de vista en cuatro de los cinco libros lanzados hasta la fecha.
                    </CharacterDescription>​
                    <CharacterDescription>
                        Aparecido en el primer volumen de la serie, Juego de tronos, Jon aparece como el hijo bastardo de 
                        Eddard Stark, Señor de Invernalia y Guardián del Norte. Debido a que en la obra de Martin los 
                        bastardos no poseen ningún derecho hereditario, Jon decidió unirse a la Guardia de la Noche, 
                        una hermandad de hombres gobernada por Benjen Stark, el hermano menor de su padre. Ésta hermandad 
                        custodia El Muro, la frontera que separa el continente de Poniente de las tierras heladas del norte 
                        donde viven los salvajes, liderados por Mance Rayder.
                    </CharacterDescription>
                </div>
                <div className ="hidden">
                    <CharacterDescription>
                        Los orígenes de Jon Nieve son hoy una de las incógnitas en la obra de Martin. 
                        Según declara Eddard Stark, su declarado padre en la obra, Jon es un hijo bastardo suyo nacido de 
                        una relación con una mujer llamada Wylla durante la Rebelión de Robert. Jon nació aproximadamente 
                        hacia el fin de estos enfrentamientos, siendo llevado a Invernalia por su padre al volver de la 
                        guerra pese al rechazo de su esposa, Catelyn Tully, que siempre trató con desprecio al muchacho al 
                        que veía como un recordatorio de la infidelidad de su marido. Jon fue criado como un hijo más de Lord
                        Eddard y desarrolló una relación de amistad-rivalidad con su medio-hermano y heredero de Invernalia, 
                        Robb Stark.
                    </CharacterDescription>  
                </div>
                <div className ="hidden">
                     <CharacterDescription>Kit Harington</CharacterDescription> 
                </div>

              </div>
            </WrapCharacter>
        );
    }

}

export default Jon;