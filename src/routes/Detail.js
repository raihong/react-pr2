import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {addItem} from "./../store.js"
import { useDispatch } from "react-redux";
import { useLike } from "../hoooks/like.js";

// let YellowBtn = styled.button`
//   background : ${ props => props.bg };
//   color : ${ props => props.bg == 'blue'? 'white' : 'black'};
//   padding : 10px
// `



function Detail(props){

  useLike()


  let {id} = useParams();
  let 찾은상품 = props.sheos.find(x => x.id == id);
  let [count, setCount] = useState(0)
  let [alert, setalert] = useState(true)
  let [탭, 탭변경] = useState(0)
  let dispatch = useDispatch()

  useEffect(()=>{
    let a = setTimeout(()=>{ setalert(false)}, 2000)

    return()=>{
      clearTimeout(a);
    }
  }, [])

  


    return(
      <div className="container">
          {/* <YellowBtn bg='blue'>버튼</YellowBtn>
          <YellowBtn bg='orange'>버튼</YellowBtn> */}
          {
            alert = true 
            ? <div className="alert alert-waring">
              2초이내 구매시 할인
              </div>
            : null
          }
        <div className="row">
    <div className="col-md-6">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">{찾은상품.title}</h4>
      <p>{찾은상품.content}</p>
      <p>{찾은상품.price}원</p>
      <button className="btn btn-danger" onClick={()=>{
        dispatch(addItem({}))
      }}>주문하기</button> 
    </div>
  </div>

  <Nav variant="tabs"  defaultActiveKey="link0">
    <Nav.Item>
      <Nav.Link eventKey="link0" onClick={()=>{ 탭변경(0)}}>버튼0</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link1" onClick={()=>{ 탭변경(1)}}>버튼1</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link2" onClick={()=>{ 탭변경(2)}}>버튼2</Nav.Link>
    </Nav.Item>
  </Nav>
  <TabContent shoes={props.shoes} 탭={탭}/>
  
</div> 
    )
  }

function TabContent({탭, shoes}){

  let [fade, setFade] = useState('')

  useEffect(()=>{
    setTimeout(()=>{ setFade('end')}, 10)
    setFade('end')
    return()=>{
      setFade('')
    }
  }, [탭])

  

  return (
  <div className={'start' + fade}>
  { [<div>{shoes[0].title}<div/>, <div>내용1</div>, <div>내용2</div>][탭] }
</div>
)

}

export default Detail;