import React from 'react';
import Itemcard from './Itemcard';
import data from './data';
//import { CartProvider } from 'react-use-cart';
//import NavBar from './NavBar';
const Home =()=>{
    
    return(
        <>
           
<section className="py-4 container">
    <div className="row justify-content-center">
        {data.productData.map((item,index)=>{
            return(
                <Itemcard img={item.img}
                 title={item.title} 
                 desc={item.desc}
                  price={item.price} 
                  item={item}
                  key={index} />
            )
        })}

    </div>

</section>
        </>
    );
};
export default Home;