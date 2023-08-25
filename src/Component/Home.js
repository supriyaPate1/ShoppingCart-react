import Footersec from '../Footersec'
import product from './Data'
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home(props) {
  
 const AddToCart=(event)=>{
  var count=props.quan;
      
        var click=event.target.name;       
        if(product[click].quantity===0){
          product[click].quantity++;
          product[click].totalPrice=product[click].price;
          props.setQuan(++count);
        }
        else{
          product[click].quantity++;
          product[click].totalPrice=product[click].price*product[click].quantity;
         
        }    
  }
  
 return (
    <>   

        <h2 style={{marginTop:"30px"}}>Add items to the cart</h2>
          <div className='displayCart'>
             { product.map((val,i)=>{
                return <div class="card">
                <img  src={val.image} alt="Card" style={{width:'100%'}}/>
                <div class="card-body">
                  <h4><b>${val.price}</b></h4>
                  <p>{val.name}</p>
                  <a href="#" className="btn btn-primary" id='addbtn' name={i} onClick={AddToCart}>Add-to-cart</a>
                </div>
              </div>                       
               })
              }
              </div>            
        <Footersec/>
    </>
  
  )
}
