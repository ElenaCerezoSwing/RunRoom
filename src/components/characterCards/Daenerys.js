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


class Daenerys extends Component {
      constructor(props) {
    super(props);
    this.state = {
      collapsed : true
    }

    this.handleClickCollapse = this.handleClickCollapse.bind(this);

  }

  handleClickCollapse() {
    this.setState({collapsed: !this.state.collapsed});

  }

    render(){
        const hiddenClass = this.state.collapsed ? 'hidden' : '';
        return(
            <WrapCharacter>
                <WrapHeader>
                  <CharacterImage src= "/images/daenerys.png" />
                  <WrapDescription>
                      <CharacterTittle> Danerys Targarien </CharacterTittle>
                      <CharacterDescription><strong>Alias: </strong> Dany,Daenerys de la Tormenta,
                        Mhysa, Khaleesi, La Madre de Dragones
                      </CharacterDescription>
                      <CharacterDescription><strong>Nacimiento: </strong>284 DC</CharacterDescription>
                      <CharacterDescription><strong>Familia: </strong>Casa Targaryen</CharacterDescription> 
                  </WrapDescription>
                </WrapHeader>
                <NavCardsButtons onClick={this.handleClickCollapse}/>
                <div>
                <div className ={this.props.handleClickCollapse ? 'hidden': ''}> 
                    <CharacterDescription>
                        Daenerys Targaryen es un personaje de ficción de la saga de literatura fantástica 
                        Canción de hielo y fuego, escrita por George R. R. Martin. 
                        Daenerys es uno de los personajes principales y posee capítulos narrados desde 
                        su punto de vista en Juego de tronos, Choque de reyes, Tormenta de espadas y Danza de dragones.
                    </CharacterDescription>​
                    <CharacterDescription>
                        Daenerys fue la única hija del rey Aerys II Targaryen y de su hermana-esposa, 
                        la reina Rhaella. Tras la muerte de su padre y de su hermano mayor en la Guerra 
                        del Usurpador, su madre murió dando a luz a la pequeña Daenerys. 
                        De esa manera, su hermano mayor Viserys quedó como legítimo rey Targaryen al 
                        Trono de Hierro y ella como su heredera.
                    </CharacterDescription>
                    <CharacterDescription>
                        Se ha señalado que el destinador inicial del personaje de Daenerys es el 
                        «deseo de venganza».
                    ​</CharacterDescription> 
                </div>
                <div className ={this.props.handleClickCollapse ? 'hidden': ''}>
                    <CharacterDescription> Daenerys fue la hija póstuma del rey Aerys II Targaryen, 
                        naciendo en mitad de una gran tormenta en la isla-fortaleza de Rocadragón, 
                        el hogar ancestral de la Casa Targaryen. Su madre, la reina Rhaella, murió 
                        cuando estaba dando a luz. Apenas siendo una recién nacida, su padre había 
                        muerto en Desembarco del Rey durante el saqueo que los Lannister sometieron 
                        a la capital y Robert Baratheon se había convertido en el nuevo Rey de los Siete Reinos. 
                        Huyendo de él, la pequeña Daenerys y su hermano mayor Viserys fueron trasladados a la 
                        ciudad de Braavos por Ser Willem Darry.
                    </CharacterDescription>  
                    <CharacterDescription> Daenerys y Viserys permanecieron al cuidado de Ser Willem 
                        en Braavos hasta la muerte de éste, tras la cual los criados les robaron todas sus 
                        posesiones y ambos quedaron en la calle. Daenerys siempre extrañaría mucho el hogar 
                        de su infancia, como símbolo de la niñez que nunca tuvo. Viserys y Daenerys vagaron los 
                        siguientes años por las Ciudades Libres buscando apoyos para su causa, pero lo único que 
                        consiguieron fueron promesas vanas. Arruinados, Viserys se vio obligado a vender todas las 
                        menguadas riquezas que poseían, incluyendo la corona de su madre, lo que le valió el apodo 
                        de «El Rey Mendigo». Finalmente ambos se establecieron en Pentos, donde fueron acogidos 
                        por el rico y poderoso magíster Illyrio Mopatis.
                    </CharacterDescription> 
                </div>
                <div className ="hidden {this.props.handleClickCollapse ? 'hidden': ''}">
                     <CharacterDescription>Emilia Clarke</CharacterDescription> 
                </div>

              </div>
            </WrapCharacter>
        );
    }

}

export default Daenerys;