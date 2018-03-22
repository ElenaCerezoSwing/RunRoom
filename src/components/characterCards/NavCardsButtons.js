import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";


const NavCard =styled.div`
display: flex;
justify-content: flex-start;
`;

const CardButton =styled.button`
background-color: white;
display: inline-flex;
justify-content: space-between;
align-items: center;
padding: 10px;
margin:0;
color:  gray;
font-family: 'Arial';
font-size: 16px;
border: none;
&: focus{
  outline:0px;
  border-bottom: 2px solid turquoise;
}
`;

class NavCardsButtons extends React.Component {
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
  render() {
    const hiddenClass = this.state.collapsed ? 'hidden' : '';
     
     return (
     
      <NavCard>
        <CardButton onClick={this.handleClickCollapse} className= "descriptionCard ${hiddenClass}" type="button" name="Description">Descripción</CardButton>
        <CardButton onClick={this.handleClickCollapse} className= "historyCard ${hiddenClass}  " type="button" name="Histoy">Historia</CardButton>
        <CardButton onClick={this.handleClickCollapse} className= "HumanBeinng  ${hiddenClass}  " type="button" name="ActressActor">Actriz/Actor</CardButton>
    </NavCard>
  );
  }
}

export default NavCardsButtons;