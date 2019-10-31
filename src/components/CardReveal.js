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
  backgroundImage: `url(${props.image})`,
  backgroundSize: 'cover',
  '-webkit-box-shadow': '2px 2px 5px 0px rgba(0,0,0,0.5);',
  '-moz-box-shadow': '2px 2px 5px 0px rgba(0,0,0,0.5);',
  boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.5);',
  transition: 'all .2s ease-in-out',
  ':hover': {
    transform: 'scale(1.05)'
  },
  '@media only screen and (max-width: 500px)': {
    width: '200px',
    height: '200px',
  }
}));

const CardInfo = styled.div(props => ({
  background: 'white',
  position: 'absolute',
  width: '350px',
  height: props.openStatus ? '360px' : '100px',
  marginTop: props.openStatus ? '0' : '280px',
  paddingTop: props.openStatus ? '20px' : '0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: props.openStatus ? 'flex-start' : 'center',
  cursor: 'pointer',
  '-webkit-user-select': 'none',       
  '-moz-user-select': 'none',
  '-ms - user - select': 'none',
  userSelect: 'none',
  transition: 'all .3s ease-in-out',
  lineHeight: '20px',
  overflow: 'hidden',
  '@media only screen and (max-width: 500px)': {
    width: '200px',
    height: props.openStatus ? '180px' : '80px',
    marginTop: props.openStatus ? '0' : '120px',
    lineHeight: '10px',
  }
}));

const CardInfoLeft = styled.div(() => ({
  textAlign: 'left',
  paddingLeft: '25px',
  width: '250px',
}));

const H3 = styled.h3(props => ({
  fontSize: '22px',
  marginBottom: props.openStatus ? '20px' : '0px',
  '@media only screen and (max-width: 500px)': {
    fontSize: '14px',
  }
}));

const H4 = styled.h4(() => ({
  margin: '8px 0 10px 0',
  '@media only screen and (max-width: 500px)': {
    fontSize: '10px',
  }
}));

const Link = styled.h5(props => ({
  display: props.openStatus ? 'block' : 'none',
  margin: '0',
  '@media only screen and (max-width: 500px)': {
    fontSize: '10px',
  }
}));

const A = styled.a(() => ({
  color: '#009e9b',
  textDecoration: 'none',
}));

const CardReveal = ({ title, description, deployedLink, githubLink,imagePath }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (isOpen) { setIsOpen(false) }
    else { setIsOpen(true) }
  };

  return (
    <Container image={imagePath}>
      <CardInfo onClick={handleClick} openStatus={isOpen} >
        <CardInfoLeft>
          <H3 openStatus={isOpen}>{title}</H3>
          <H4>{description}</H4>
          <Link openStatus={isOpen}>View the deployed project <A href={deployedLink} target="blank">here</A>.</Link>
          <Link openStatus={isOpen}>View it on Github <A href={githubLink} target="blank">here</A>.</Link>
        </CardInfoLeft>
        <img className="card-hamburger" src={ isOpen ? exit : hamburger } alt="open more" />
      </CardInfo>
    </Container>
  )
}

export default CardReveal;
