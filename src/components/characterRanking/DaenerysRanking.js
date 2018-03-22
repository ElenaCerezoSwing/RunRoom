import React, {Component} from 'react';
import styled from "styled-components";
import StarRanking from './StarRanking.js';

const WrapRanking= styled.div`
background-color: white;
padding: 40px;
margin:0;
color:gray;
font-family: 'Arial';
display: inline-flex;
`;
const RankingCharacter= styled.div`
background-color: white;
padding-left: 40px;
margin:0;
color:gray;
font-family: 'Arial';
display: flex;
flex-direction:column;
margin: auto;
`;
const CharacterImage= styled.img`
border-radius: 50px;
width: 100px;
height: 100px;
`;
const CharacterTittle = styled.h3`
font-size: 20px;
font-weight: bold;
color: black;
justify-content:flex-start;
margin: 0px;
`;
const CharacterDescription = styled.p`
font-size: 14px;
color: gray;
text-align: left;
`;

class DaenerysRanking extends Component {

    render(){
        return(
            <WrapRanking>
                <StarRanking />
                <CharacterImage src= "/images/daenerys.png" />
                <RankingCharacter>
                  <CharacterTittle> Danerys Targarien </CharacterTittle>
                   <CharacterDescription>Casa Targaryen</CharacterDescription>
                </RankingCharacter>

            </WrapRanking>    
        );
    }

}
export default DaenerysRanking;