import React, {useEffect, useState}from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import {DLT} from '../redux/action/action';

const Hader = () => {
const[price,setPrice] = useState(0);
//console.log(price);

const getdata = useSelector((state)=>state.Cartreducer.cart)
  //console.log(getdata)
  
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dlt = (id)=>{
    dispatch(DLT(id))
  }
   const total = ()=>{
    let price = 0;
    getdata.map((ele,key)=>{
     price = ele.price * ele.qnty + price
    })
    setPrice(price)
   }
    useEffect(()=>{
      total()
    },[total])
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark" style={{height:60}}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">Home</NavLink>
          <Nav className="me-auto">
            <NavLink to="/cart" className="text-decoration-none text-light">Item Details</NavLink>
          </Nav>
           <Badge badgeContent={getdata.length} color="primary"
           id="basic-button"
           aria-controls={open ? 'basic-menu' : undefined}
           aria-haspopup="true"
           aria-expanded={open ? 'true' : undefined}
           onClick={handleClick}>
            <i className="fa fa-cart-arrow-down text-light" style={{fontSize:25,cursor:'pointer'}} ></i>
           </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
          'aria-labelledby': 'basic-button',
          }}
          >
            {
              getdata.length ?
              <div className='card_details' style={{width:'24rem',padding:10}}>
                <Table>
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Restaurent Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      getdata.map((e)=>{
                         return(
                          <tr>
                            <td>
                              <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                              <img src={e.imgdata} style={{width:'5rem',hight:'5rem'}} />
                              </NavLink>
                             
                            </td>
                            <td>
                              <p>{e.rname}</p>
                              <p>Price:₹{e.price}</p>
                              <p>Quantity:{e.qnty}</p>
                              <p style={{fontSize:20,cursor:'pointer'}}onClick={()=>dlt(e.id)}>
                                <i className='fas fa-trash smalltrash' ></i>
                              </p>
                            </td>
                            <td className='mt-5 largetrash'style={{fontSize:20,cursor:'pointer'}} onClick={()=>dlt(e.id)}>
                               <i className='fas fa-trash'></i>
                            </td>
                          </tr>
                         )
                      })
                    }
                    <p className='text-center'>Total:₹{price}</p>
                  </tbody>
                </Table>

              </div>:
              <div className='card_details d-flex justify-content-center align-items-center' style={{width:"12rem",padding:8,position:"relative"}}>
              <i className='fas fa-close' 
              onClick={handleClose}
               style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
              <p style={{fontSize:20}}>Your catr is Empty!</p>
              </div>
            }
          
        </Menu>
    </Navbar>
  </>
  )
}

export default Hader
