import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <>
    <Navbar className='headerbg' bg='light'>
        <Container>
    
          <Nav className='setlink'>
            <Link to="calculator" className='links'>Calculator</Link>
            

          </Nav>
        </Container>
      </Navbar>

    </>
  )
}
