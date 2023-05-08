import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import apiDeputados from '../services/apiDeputados'

const Cabecalho = () => {

  const [partidos, setPartidos] = useState([])  

  useEffect(() => {
      apiDeputados.get('/partidos?itens=30').then(resultado => {
          setPartidos(resultado.data.dados)
      })

  }, [])

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/deputados">Deputados</Navbar.Brand>
          <Nav className="me-auto">
          <NavDropdown title="Partidos" id="collasible-nav-dropdown">
            {partidos.map(item => (
              <NavDropdown.Item key={item.id}>{item.nome}</NavDropdown.Item>
            ))}
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

    </>
  )
}

export default Cabecalho