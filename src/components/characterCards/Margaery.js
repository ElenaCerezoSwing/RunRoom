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

class Margaery extends Component {

    render(){
        return(
            <WrapCharacter>
                <WrapHeader>
                  <CharacterImage src= "/images/margaery.png" />
                  <WrapDescription>
                      <CharacterTittle> Margaery Tyrell </CharacterTittle>
                      <CharacterDescription><strong>Alias: </strong> La Joven Reina,
                        La Viuda Negra
                      </CharacterDescription>
                      <CharacterDescription><strong>Nacimiento: </strong>283 DC</CharacterDescription>
                      <CharacterDescription><strong>Familia: </strong>Casa Tyrell</CharacterDescription> 
                  </WrapDescription>
                </WrapHeader>
                <NavCardsButtons />
                <div>
                <div className ="active"> 
                    <CharacterDescription>
                        Margaery Tyrell es un personaje ficticio de la saga Canción de hielo y 
                        fuego del escritor George R.R. Martin. Si bien en la obra escrita tiene un rol 
                        secundario, el personaje cobra más importancia en la adaptación televisiva de HBO, 
                        Juego de Tronos. 
                    </CharacterDescription>​
                    <CharacterDescription>
                        En la saga escrita, apenas se poseen datos sobre la personalidad de Margaery Tyrell 
                        debido a que adquiere un rol secundario. Se da a entender que se trata de una mujer de 
                        carácter extrovertido y alegre, debido a que siempre se hallaba en compañía de damas, 
                        bardos, músicos o malabaristas. Aficionada también a las obras de caridad, se introducía 
                        en los barrios pobres y alternaba con la ciudadanía, lo que le hizo ganarse el cariño del
                        pueblo. La reina Cersei Lannister, posiblemente debido a su creciente paranoia sobre 
                        Margaery, la definía como «Un lobo con piel de cordero». Se la considera también una 
                        mujer perspicaz, pues nada más ser encarcelada supo averiguar que Cersei estaba detrás 
                        de las acusaciones contra ella.
                    </CharacterDescription>
                </div>
                <div className ="hidden">
                    <CharacterDescription> 
                        Margaery contrae matrimonio con Renly Baratheon, el cual con la ayuda de la Casa 
                        Tyrell se ha autoproclamado Rey de los Siete Reinos. Margaery se asienta en Puenteamago, 
                        el asentamiento de la Casa Caswell, junto a los ejércitos de Renly que se preparan para 
                        marchar hacia Bastión de Tormentas para enfrentarse a Stannis Baratheon.2​ Sin embargo, 
                        Renly es asesinado en misteriosas circunstancias sin llegar a consumar el matrimonio.
                    </CharacterDescription> 
                    <CharacterDescription> 
                        Los Tyrell se alían con la Casa Lannister y derrotan a Stannis en la Batalla del 
                        Aguasnegras donde un ejército combinado Lannister-Tyrell vence a Stannis cuando 
                        estaba a punto de tomar la capital. Para afianzar esta nueva alianza entre el 
                        Trono de Hierro y los Tyrell, el rey Joffrey Baratheon rompe su compromiso con 
                        Sansa Stark y se promete con Margaery... Por respeto a los lectores no continuaremos con 
                        la historia para no hacer spoilers.
                    </CharacterDescription> 
                </div>
                <div className ="hidden">
                     <CharacterDescription>Natalie Dormer</CharacterDescription> 
                </div>

              </div>
            </WrapCharacter>
        );
    }

}

export default Margaery;