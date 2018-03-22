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

class Tyrion extends Component {

    render(){
        return(
            <WrapCharacter>
                <WrapHeader>
                  <CharacterImage src= "/images/tyrion.png" />
                  <WrapDescription>
                      <CharacterTittle> Tyrion Lannister </CharacterTittle>
                      <CharacterDescription><strong>Alias: </strong> Gnomo, Mediohombre
                      El Gigante de Lannister, Yollo, Hugor Colina.
                      </CharacterDescription>
                      <CharacterDescription><strong>Nacimiento: </strong>274 DC</CharacterDescription>
                      <CharacterDescription><strong>Familia: </strong>Casa Lannister</CharacterDescription> 
                  </WrapDescription>
                </WrapHeader>
                <NavCardsButtons />
                <div>
                <div className ="active"> 
                    <CharacterDescription>
                        Tyrion Lannister es un personaje ficticio de la saga Canción de hielo y fuego de
                        George R. R. Martin y de su correspondiente adaptación televisiva, Juego de Tronos.
                    </CharacterDescription>​
                    <CharacterDescription>
                        Basado en una idea que vino a Martin al escribir la novela de 1981 Windhaven, 
                        Tyrion ha sido considerado como una de las mejores creaciones de autor y uno de 
                        los personajes más populares por el New York Times. Martin ha nombrado el personaje 
                        como su favorito en la serie.
                    </CharacterDescription>
                    <CharacterDescription>
                        Introducido en 1996 en Juego de tronos, Tyrion es un enano y miembro de la Casa Lannister,
                        una de las familias más ricas y poderosas en el reino ficticio de Poniente (Westeros). 
                        Posteriormente apareció en sus secuelas Choque de reyes (1998) y Tormenta de espadas (2000). 
                        Tyrion fue uno de los pocos personajes prominentes que no aparecieron en Festín de cuervos (2005), 
                        pero volvió en la quinta novela, Danza de dragones (2011), y se tiene prevista su aparición en el 
                        sexto libro de la saga, Vientos de invierno. La popularidad del personaje llevó a que Martin y 
                        Bantam Books publicaran en 2013, "The Wit and Wisdom of Tyrion Lannister" 
                        (El ingenio y la sabiduría de Tyrion Lannister), una colección ilustrada de citas que 
                        Tyrion dice en las novelas.
                    ​</CharacterDescription> 
                </div>
                <div className ="hidden">
                    <CharacterDescription> 
                        Tyrion fue el tercer hijo de Lord Tywin Lannister y de su 
                        esposa Joanna Lannister. Durante su parto, su madre murió, descubriéndose que 
                        Tyrion era un enano deforme. Por esto, tanto su padre como su hermana lo 
                        despreciaron toda su vida y no lo tuvieron en consideración, excepto su hermano 
                        Jaime, quien le demostró un amor genuino.
                    </CharacterDescription> 
                    <CharacterDescription> 
                        Teniendo 13 años, Tyrion conoció a una muchacha llamada Tysha. Ambos se 
                        enamoraron y se casaron en secreto, hasta que su padre lo descubrió y entonces 
                        decidió enseñarle a su hijo una dura lección. Tysha fue llevada a Roca Casterly 
                        y Tywin obligó a Tyrion a contemplar como era violada por los guardias y pagada, 
                        después obligó a Tyrion a que la violara y le pagara con una moneda de oro, pues 
                        según él, un Lannister vale más. Después obligó a Jaime a decirle que Tysha era 
                        una prostituta y que la habían comprado para que Tyrion se acostara con una mujer 
                        por primera vez. Este recuerdo traumatizó a Tyrion de por vida y dejó a Jaime lleno
                        de culpa.
                    </CharacterDescription> 
                </div>
                <div className ="hidden">
                     <CharacterDescription>Peter Dinklage</CharacterDescription> 
                </div>

              </div>
            </WrapCharacter>
        );
    }

}

export default Tyrion;