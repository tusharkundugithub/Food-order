import React, { useState } from 'react'
import './style.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cartdata from './Cartdata';
import { useDispatch } from 'react-redux';
import {ADD} from '../redux/action/action';


const Cart = () => {
  const[data,setData] = useState(Cartdata);
  const dispatch = useDispatch();

  const Send = (e)=>{
   dispatch(ADD(e))
  }
  
  return (
   <div className='container mt-3'>
     <h1 className='text-center'>Select Your Item</h1>
      <div className='row d-flex justify-content-center align-items-center'>
       {
        data.map((element,id)=>{
          return(
            <>
            <Card style={{ width: '22rem',border:'none'}} className='mx-2 mt-4 card_style'>
            <Card.Img variant="top" src={element.imgdata} style={{height:'16rem'}} className='mt-3' />
             <Card.Body>
              <Card.Title>{element.rname}</Card.Title>
               <Card.Text>
                 Price: ₹{element.price }
               </Card.Text>
               <div className='button_div d-flex justify-content-center'>
                <Button variant="primary" 
                className='col-lg-12'
                onClick={()=>Send(element)}
                >Add to cart
                </Button>
               </div>
              </Card.Body>
            </Card>
            </>
          )
        })
      }
      </div>
    </div>
  )
}

export default Cart
