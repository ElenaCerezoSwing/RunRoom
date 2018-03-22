import React from 'react';
import styled from "styled-components";

  
const GoTHheader =styled.div`
  background-color: #1B323F;
  height: 80px;
  padding-left: 40px;
  padding-bottom: 15px;
  color: white;
  align-content: flex-end;
  margin: 0;
  @media (min-width: 768px) {
    padding-left: 80px;
   }
`;
const HeaderTittle =styled.h4`
  position: relative;
  top: 65px;
  color: white;
  align-content: flex-end;
  margin: 0;
  @media (min-width: 768px){
    font-size: 30px;
    top: 50px;
  }
  `;

const SubHeader =styled.div`
  background-color: #254556;
  height: 80px;
  padding-left: 40px;
  padding-bottom: 15px;
  color: white;
    @media (min-width: 768px) {
     padding-left: 80px;
    }
  `;

  const SubHeaderOptions = styled.button`
  position:relative;
  top: 15px;
  line-height: 20px;
  background-color: #254556;
  color: white;
  margin: 0px;
  padding-left: 0px;
  margin-right: 35px;
  text-decoration: none;
  
  display: flex;
  flex-direction:row;
  border: none;
    &: focus{
    outline:0px;
    border-bottom: 3px solid turquoise;
    padding-bottom: 6px;
  }

  @media (min-width: 768px) {
    display: inline-flex;
    position: relative;
    top: 65px;
    font-size: 20px;
    justify-content: center;
   }`;  


class Header extends React.Component {
  render() {
    return (
      <div>
          <GoTHheader>
              <HeaderTittle>Game of Thrones </HeaderTittle>
          </GoTHheader>
          <SubHeader>
              <SubHeaderOptions>Favoritos</SubHeaderOptions>
              <SubHeaderOptions>Listado de casas</SubHeaderOptions>
              <SubHeaderOptions>Personajes secundarios</SubHeaderOptions>
          </SubHeader>
      </div>

  );
  }
}

export default Header;