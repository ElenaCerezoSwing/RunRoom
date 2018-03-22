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

class Sansa extends Component {

    render(){
        return(
            <WrapCharacter>
                <WrapHeader>
                  <CharacterImage src= "/images/sansa.png" />
                  <WrapDescription>
                      <CharacterTittle> Sansa Stark </CharacterTittle>
                      <CharacterDescription><strong>Alias: </strong>Pajarito, Sansa, Lady Lannister,
                        Alayne Piedra.
                      </CharacterDescription>
                      <CharacterDescription><strong>Nacimiento: </strong>286 DC</CharacterDescription>
                      <CharacterDescription><strong>Familia: </strong>Casa Stark</CharacterDescription> 
                  </WrapDescription>
                </WrapHeader>
                <NavCardsButtons />
                <div>
                <div className ="active"> 
                    <CharacterDescription>
                        Sansa Stark es un personaje ficticio de la saga de libros Canción de hielo y 
                        fuego del escritor George R. R. Martin. Es una de las hijas de Eddard Stark, 
                        Señor de Invernalia, Guardián del Norte y Mano del Rey de Robert Baratheon. 
                        Sansa es uno de los personajes principales de la saga, contando con capítulos 
                        desde su punto de vista en cuatro de los cinco libros publicados hasta la fecha. 
                    </CharacterDescription>​
                    <CharacterDescription>
                        Sansa Stark es representada como la ingenua y soñadora hija mayor de Eddard 
                        Stark y Catelyn Tully. Idealizaba a los caballeros y soñaba con casarse con un 
                        príncipe guapo y cortés, influenciada por las historias y cuentos que leía. 
                        Sansa creció representando el ejemplo de la dama perfecta: hermosa y elegante, 
                        sabía cantar, bailar, bordar y tenía unos modales exquisitos. Sansa era la más 
                        diferente de todos los hermanos Stark, sobre todo tenía una personalidad 
                        completamente opuesta a la de su hermana Arya.
                    </CharacterDescription>
                    <CharacterDescription>
                        El personaje de Sansa es de los que más evoluciona a lo largo de la saga, 
                        una vez se sumerge en el mundo de la corte y observa que nada es como ella 
                        había imaginado, adopta una visión pesimista y trágica de la vida. Sin que 
                        ella sea consciente, se convierte en el principal peón de la Guerra de los 
                        Cinco Reyes. Tras su estancia en el Nido de Águilas con Petyr Baelish, Sansa 
                        adopta el nombre de «Alayne Piedra» y comienza a comprender cómo se practica 
                        el «juego de tronos».
                    ​</CharacterDescription> 
                </div>
                <div className ="hidden">
                    <CharacterDescription> 
                        Cuando el rey Robert Baratheon visita Invernalia, el rey y su padre comprometen 
                        a Sansa con el príncipe Joffrey Baratheon, heredero del Trono de Hierro. 
                        Sansa cayó rendida ante el joven y apuesto príncipe, al que idealizaba y 
                        con el que estaba ansiosa por casarse; incluso llegó a mentir para protegerle, 
                        lo que causó la muerte de su loba huargo, Dama.
                    </CharacterDescription> 
                    <CharacterDescription> 
                        Sansa llega a Desembarco del Rey junto a su hermana Arya y su mejor amiga, 
                        Jeyne Poole. Sansa cada día estaba más entusiasmada con su compromiso, pero se 
                        decepciona al saber que su padre ha renunciado al cargo de Mano del Rey y quiere 
                        regresar a Invernalia con ellas.​ Creyendo que si se lo decía a la reina podría quedarse 
                        con Joffrey, le cuenta a la reina Cersei los planes de su padre, ayudando que la reina 
                        elucubrase el arresto de Ned Stark.
                    </CharacterDescription> 
                    <CharacterDescription>
                        Tras el arresto de su padre, Sansa le pide al rey Joffrey misericordia por él. 
                        El rey le promete que si declara su traición, será clemente. Pero finalmente 
                        Joffrey ordena decapitar a Ned Stark pese a las súplicas de Sansa y las 
                        advertencias de su madre.
                    </CharacterDescription>
                </div>
                <div className ="hidden">
                     <CharacterDescription>Sophie Turner</CharacterDescription> 
                </div>

              </div>
            </WrapCharacter>
        );
    }

}

export default Sansa;