import React, { useEffect, useState } from 'react';

import { Link } from "react-router-dom";

import { Container, Nav } from './styles'

const Header: React.FC = () => {
  const [ active, setActive ] = useState('home')
  const CurrentPage = localStorage.getItem('currentPage')

  useEffect(() => {
    if(CurrentPage) {
      setActive(CurrentPage)
    }
  }, [active])

  return ( 
  <Container>
    <div>
      <img src="https://space-tourism-website-murex.vercel.app/images/shared/logo.svg" alt="Logo" />
    </div>
    <Nav>
      <li className={active === 'home' ? 'active' : ''}>
        <Link to={"/home"} onClick={() => setActive('home')}>
          Home
        </Link>
      </li>
      <li className={active === 'destination' ? 'active' : ''}>
        <Link to={"/destination"} onClick={() => setActive('destination')}>   
          Destination
        </Link>
      </li>
      <li className={active === 'crew' ? 'active' : ''}>
        <Link to={"/crew"} onClick={() => setActive('crew')}>   
          Crew
        </Link>
      </li>
      <li className={active === 'technology' ? 'active' : ''}>
        <Link to={"/technology"} onClick={() => setActive('technology')}>   
          Technology
        </Link>
      </li>
    </Nav>
  </Container>
  )
}

export default Header;