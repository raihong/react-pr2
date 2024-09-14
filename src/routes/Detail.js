import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// let YellowBtn = styled.button`
//   background : ${ props => props.bg };
//   color : ${ props => props.bg == 'blue'? 'white' : 'black'};
//   padding : 10px
// `



function Detail(props){



  let {id} = useParams();
  let 찾은상품 = props.sheos.find(x => x.id == id);
  let [count, setCount] = useState(0)
  let [alert, setalert] = useState(true)

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
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>
</div> 
    )
}

export default Detail;