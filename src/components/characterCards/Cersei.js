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


class Cersei extends Component {

    render(){
        return(
            <WrapCharacter>
                <WrapHeader>
                  <CharacterImage src= "/images/cersei.png" />
                  <WrapDescription>
                      <CharacterTittle> Cersei Lannister </CharacterTittle>
                      <CharacterDescription><strong>Alias: </strong> Reina Cersei, La Primera de su Nombre,
                        Reina de los Ándalos, los Rhoynar y los Primeros Hombres, 
                        Protectora de los 7 Reinos
                      </CharacterDescription>
                      <CharacterDescription><strong>Nacimiento: </strong>266 DC</CharacterDescription>
                      <CharacterDescription><strong>Familia: </strong>Casa Lannister</CharacterDescription> 
                  </WrapDescription>
                </WrapHeader>
                <NavCardsButtons />
                <div>
                <div className ="active"> 
                    <CharacterDescription>
                        Cersei Lannister es un personaje ficticio de la saga Canción de hielo y fuego de
                        George R. R. Martin. Se caracteriza por ser la intrigante y ambiciosa esposa del 
                        rey Robert Baratheon, reina consorte de los Siete Reinos. Es uno de los personajes
                         principales de la saga y cuenta con capítulos propios en el cuarto libro, 
                         Festín de Cuervos. Por sus actos y actitud es considerada una de las principales 
                         antagonistas de la serie.
                    </CharacterDescription>​
                    <CharacterDescription>
                        Cersei es representada como una mujer de carácter narcisista y ambicioso, 
                        no se detiene ante nada para cumplir sus objetivos y ella misma admite no amar a 
                        ninguna otra persona que no sea ella o sus hijos, pues cree que el amor hace a las 
                        personas débiles.
                    </CharacterDescription>
                    <CharacterDescription>
                        Ya desde su juventud, Cersei admiraba a su padre y sus dotes de mando, 
                        deseando probar que era tan buen gobernante como su progenitor, pero cuando 
                        consigue el mando no es capaz de manejarlo, ya que no posee la dedicación y 
                        prudencia suficientes para la política y evita enfrentarse a situaciones 
                        delicadas, prefiriendo rodearse de leales y aduladores. Tampoco es capaz de 
                        tolerar las opiniones disidentes y confunde el desacuerdo con rebeldía.
                    ​</CharacterDescription> 
                </div>
                <div className ="hidden">
                    <CharacterDescription> 
                        Cersei fue la primera hija de Lord Tywin Lannister, Señor de Roca Casterly 
                        y Guardián del Occidente, además de Mano del Rey de Aerys II Targaryen por 
                        entonces. Cersei era melliza de su hermano Jaime, el cual nació aferrado a 
                        su pie. Desde que eran niños, ambos fueron muy cercanos e inseparables y 
                        juntos comenzaron a explorar su sexualidad, incluso su madre Joanna separó sus 
                        aposentos cuando los descubrió en actitudes obscenas.
                    </CharacterDescription>
                    <CharacterDescription>
                        Siendo todavía una niña, su madre murió en el parto de su hermano Tyrion, 
                        resultando ser que Tyrion era un enano deforme. Cersei siempre guardó un gran 
                        desprecio por su hermano pequeño, no solo por su actitud hedonista y por 
                        provocar la muerte de su madre en el parto, sino también por una profecía 
                        que afirmó que su hermano menor la estrangularía.
                    </CharacterDescription> 
                    <CharacterDescription> 
                        Después de que Robert Baratheon se convirtiera en rey, Cersei se casó con él 
                        por orden de su padre. En un principio, Cersei estaba entusiasmada por casarse 
                        con el aguerrido y apuesto Robert, que era el deseo de cualquier doncella, 
                        pero Cersei pronto se dio cuenta de que Robert amaba a otra mujer, Lyanna Stark, 
                        la cual ya había fallecido. En su noche de bodas, un borracho Robert llamó a 
                        Cersei «Lyanna»: eso hizo que Robert se ganara el eterno rencor y desprecio de 
                        Cersei. Ambos tendrían tres hijos: Joffrey, Myrcella y Tommen, que en realidad 
                        eran fruto del incesto con su hermano Jaime, aunque esto permaneció desconocido 
                        para todos, incluido el rey.
                    </CharacterDescription> 
                </div>
                <div className ="hidden">
                     <CharacterDescription>Lena Headey</CharacterDescription> 
                </div>

              </div>
            </WrapCharacter>
        );
    }

}

export default Cersei;