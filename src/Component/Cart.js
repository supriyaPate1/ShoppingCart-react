import React from 'react'
import './cart.css'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import product from './Data'

const Cart = (props) => {
var [temp,setTemp]=useState(0)
 var [GP,setGp]=useState(0)
 var [status,setStatus]=useState("")
 var[count3,setCount3]=useState(0)

 //function when clicked on empty cart 
 const emptyCart=()=>{
 product.map((val)=>{
  val.quantity=0;
  setTemp(++temp)
  props.setQuan(0)
 })
 }

 //function when clicked on delete btn
 const deleteRow=(event)=>{
  var cnt=props.quan;
  var click=event.target.name; 
  product[click].quantity=0; 
  product[click].totalPrice=0;
    --cnt;
    setTemp(++temp)
    props.setQuan(cnt) 
 }


 //function when clicked on + btn
 const PlusPro=(event)=>{
  var count1=props.quan; 
  var click=event.target.name;    
     product[click].quantity++;    
     product[click].totalPrice+=product[click].price;
     props.setProCount(++count1);
     setTemp(++temp)     
 }


 //function when clicked on - btn
 const minusPro=(event)=>{
  var count1=props.quan; 
  var cnt=props.quan;
  var click=event.target.name;   
     product[click].quantity--;       
     product[click].totalPrice-=product[click].price;
     props.setProCount(--count1);
     setTemp(--temp)
     if( product[click].quantity<1)
     --cnt;
     props.setQuan(cnt) 
 }


 //function to calculate total cart value
 const grandPrice=()=>{
  var Gval=0;
  var cnt=props.quan;
  product.map((val)=>{
    if(cnt> 0){
      Gval+= val.totalPrice;
    }
   
  })
  setGp(Gval) 
  var gpval=document.getElementById("gp").value;
  if(gpval!==""){
       setStatus("Your total cart value is: Rs. ")
  }
  else if(gpval===""){
  setStatus("Your cart is emppty.Shop now to add items in your cart. ")
  }
  setCount3(+count3+1)
 }



  return (
   <>
   <div className='dis'>
   <table id='myTable'>
      <thead>
      <tr>
          <td>Product Id</td>
          <td>Product Name</td>
		      <td>Product Image</td>
          <td>Product price</td>  
          <td>Product Total Quantity</td> 
          <td>Total Price</td>      
          <td>Inc/Dec</td>
          
		      <td><a class='empty' id='empty' href="#" onClick={emptyCart}>Empty Cart</a></td>
		  </tr>
      </thead>
      <tbody>
        <tr></tr>
        { product.map((val,i)=>{
          if(val.quantity>0){     
          return<tr>
            <td>{val.id}</td>
            <td>{val.name}</td>
            <td><img id='tdimg' src={val.image}/></td>
            <td>{val.price}</td>
            <td>{val.quantity}</td>
            <td>{val.totalPrice}</td>
            <td><button id='minus' name={i}onClick={minusPro}>-</button>{val.quantity}<button id='plus'  name={i} onClick={PlusPro}>+</button></td>
            <td><button type='button' id='delPro' className='delete' name={i} onClick={deleteRow}>Delete</button></td>
          </tr>
            }})}
      </tbody>
   </table>
   <div className='checkout'> 
   <button id='proceed'  onClick={grandPrice} >Proceed to checkout</button>
   
   </div> 
   </div>
   <div  id='gpV'><h2 id='gp' >{status}{GP}</h2></div>
   <Outlet/>
   </>
  )
}

export default Cart