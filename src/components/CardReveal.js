import React from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';
import hamburger from '../images/icons/hamburger-dots.svg';
import exit from '../images/icons/exit.svg';

const Container = styled.div(props => ({
  width: '350px',
  height: '380px',
  margin: '50px',
  fontFamily: "Proza Libre, sans-serif",
  textAlign: 'center',
  backgroundImage: `url(${props.img})`,
  backgroundSize: 'cover',
  '-webkit-box-shadow': '5px 5px 10px -4px rgba(0,0,0,0.8)',
  '-moz-box-shadow': '5px 5px 10px -4px rgba(0,0,0,0.8)',
  boxShadow: '5px 5px 10px -4px rgba(0,0,0,0.8)'
}))

const CardInfo = styled.div(props => ({
  background: 'white',
  position: 'absolute',
  width: '350px',
  height: props.openStatus ? '380px' : '100px',
  marginTop: props.openStatus ? '0px' : '280px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
  '-webkit-user-select': 'none',       
  '-moz-user-select': 'none',
  '-ms - user - select': 'none',
  userSelect: 'none',
  transition: 'all .2s',
}));

const CardInfoLeft = styled.div(() => ({
  textAlign: 'left',
  paddingLeft: '25px'
}));

const Link = styled.h4(props => ({
  display: props.openStatus ? 'block' : 'none',
}));


const CardReveal = ({ title, description, deployedLink, githubLink,imagePath }) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (isOpen) { setIsOpen(false) }
    else { setIsOpen(true) }
  };

  return (
    <Container img={imagePath}>
      <CardInfo onClick={handleClick} openStatus={isOpen} >
        <CardInfoLeft>
          <h3>{title}</h3>
          <h4>{description}</h4>
          <Link openStatus={isOpen}>View the deployed project <a href={deployedLink} target="blank">here</a>.</Link>
          <Link openStatus={isOpen}>View it on Github <a href={githubLink} target="blank">here</a>.</Link>
        </CardInfoLeft>
        <img className="card-hamburger" src={ isOpen ? exit : hamburger } alt="open more" />
      </CardInfo>
    </Container>
  )
}

export default CardReveal;
