import React,{Component} from 'react';
import styled from "styled-components";
import {ProductConsumer} from '../context';
import {ButtonContainer} from './button';
import {Link} from 'react-router-dom';


class Modal extends Component {
  render(){
    return(
      <ProductConsumer>
        {(value) => {
          const {modalOpen,closeModal} = value;
          const {img,price,title} =value.modalProduct;
          if(!modalOpen){
            return null;
          }else {
            return (<div
              style={ModalContainer  }
              >
              <div className="container">
                <div className="row">
                  <div style={modal} className="col-8 mx-auto col-md-6 col-ld-4 text-center text-capitalize p-5">
                    <h5>item add to the cart</h5>
                    <img src={img} className="img-fluid" alt="product"></img>
                    <h5>{title}</h5>
                    <h5 className="text-muted">price: $ {price}</h5>
                    <Link to="/">
                      <button className="ButtonContainer" onClick={()=>{closeModal()}}>
                        continue shopping
                      </button>
                    </Link>
                    <Link to="/cart">
                      <button className="ButtonContainer" onClick={()=>{closeModal()}}>
                        go to Cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
          }

        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer={
position:'fixed',
top:'0',
left:'0',
right:'0',
bottom:'0',
background:'rgba(0,0,0,0.3)',
display:'flex',
alignItems:'center',
justifyContent:'center',

}
const modal ={
  background:'var(--mainWhite)'
}

export default Modal;
