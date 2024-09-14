import './App.css';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import bg from './img/IMG_0329-Enhanced-NR.jpg'
import { useState } from 'react';
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail';

function App() {

  let [shoes] =useState(data);
  let navigate = useNavigate();
  

  return (
    <div className='App'>
      
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">fitconnect</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail')}}>Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <Routes>
      <Route path='*' element={<div>잘못된 페이지 요청입니다</div>}/>
      <Route path='/' element={<div>메인페이지입니다</div>}/>
      <Route path='/detail/:id' element={<Detail shoes={shoes}/>}/>
      
    </Routes>

      {/* <div className='main-bg' style={{backgroundImage: 'url('+ bg +')'}}></div> */}
      <div className='main-bg'></div>

      <div className='container'>
        <div className='row'>
          {/* <Card shoes={shoes[0]} i={1}></Card>
          <Card shoes={shoes[1]} i={2}></Card>
          <Card shoes={shoes[2]} i={3}></Card> */}
          {
            shoes.map((a, i)=>{
              return(
                <Card shoes={shoes[i]} i={i}></Card>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}




function Card(props) {
  return(
  <div className="col-md-4">
  <img src={'https://codingapple1.github.io/shop/shoes'+(props.i+1) +'.jpg'} width="80%"/>
  <h4>{props.shoes.title}</h4>
  <p>{props.shoes.content}</p>
  <p>{props.shoes.price}</p>
</div>
  )
}

export default App;
