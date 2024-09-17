import './App.css';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import bg from './img/IMG_0329-Enhanced-NR.jpg'
import { lazy, useState } from 'react';
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
// import Detail from './routes/Detail';
// import Cart from'./routes/Cart'
import axios from 'axios';
import { useQuery } from 'react-query';

const Detail = lazy(() => import('./routes.Detail'));
const Cart = lazy(() => import('./routes/Cart'));

function App() {

  let [shoes, setShoes] =useState(data);
  let navigate = useNavigate();
  
  let result = useQuery('작명', ()=>{
    return axios.get('https://codingapple1.gihub.io/userdata.json').then((a)=>{
      return a.data
    })
  })

  result.data //ajax요청이 성공했을때
  result.isLoading //로딩중일때
  result.error //실패했을때

  return (
    <div className='App'>
      
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">fitconnect</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail')}}>Link</Nav.Link>
            </Nav>
          <Nav className='ms-auto'>
            { result.isLoading && '로딩중' }
            { result.data && '' }
            { result.error && '로딩중' }
          </Nav>
      </Container>
    </Navbar>


    <Routes>
      <Route path='*' element={<div>잘못된 페이지 요청입니다</div>}/>
      <Route path='/' element={<div>메인페이지입니다</div>}/>
      <Route path='/detail/:id' element={<Detail shoes={shoes}/>}/>
      <Route path="/cart" element={<Cart/>}/>
      
    </Routes>

      {/* <div className='main-bg' style={{backgroundImage: 'url('+ bg +')'}}></div> */}
      <div className='main-bg'></div>

      <div className='container'>
        <div className='row'>
          {/* <Card shoes={shoes[0]} i={1}></Card>
          <Card shoes={shoes[1]} i={2}></Card>
          <Card shoes={shoes[2]} i={3}></Card> */}
          { shoes.map((a, i)=>{
              return(
                <Card shoes={shoes[i]} i={i} key={i}></Card>
              )
            })
          }
        </div>
      </div>
      <button onClick={()=>{
        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((result=>{
          console.log(result.data)
          let copy = [...shoes, ...result.data];
          setShoes(copy);
        }))
        //예외처리
        .catch(()=>{
          console.log('실패함ㅅㄱ')
        })
      }}>더보기</button>
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
