import React from 'react';
import styled from "styled-components";

const StarsWrapper =styled.div`
display: inline-block;
font-size: 0px;
padding-right:40px;
margin: auto;
`;

const StarOption =styled.a`
text-decoration: none;
display: inline-block;
font-size: 32px;
color: lightgray;
&:hover {
  color: turquoise;
  
}
`;

class StarRanking extends React.Component {
  render() {
    return (
      <StarsWrapper>
          <StarOption href="#" data-value="1" title="Votar con 1 estrellas">&#9733;</StarOption>
          <StarOption href="#" data-value="2" title="Votar con 2 estrellas">&#9733;</StarOption>
          <StarOption href="#" data-value="3" title="Votar con 3 estrellas">&#9733;</StarOption>
          <StarOption href="#" data-value="4" title="Votar con 4 estrellas">&#9733;</StarOption>
          <StarOption href="#" data-value="5" title="Votar con 5 estrellas">&#9733;</StarOption>
      </StarsWrapper>

  );
  }
}

export default StarRanking;