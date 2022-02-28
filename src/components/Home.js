import React from 'react';

const Header = ({addtoCarthandler, carData}) =>{
    
    return (
    <div className='headerWrapper'>
        <ul>
            <li className='cart'>
                <img src={'https://image.flaticon.com/icons/png/512/263/263142.png'} alt='cart'/>
                <span>{carData && carData.length}</span>
            </li>
        </ul>
    </div>
    )
}

const Products = ({addtoCarthandler, removetoCarthandler}) =>{
    return (
    <div className='productWrapper'>
        <img src={'https://assets.kogan.com/images/brus-australia/BRS-APPLE-IPHONE-X-256GB-SPACE-GREY/2-6ed4b214f7-iphone-x-gray2-500x500.jpg?auto=webp&canvas=753%2C502&fit=bounds&height=502&quality=75&width=753'} alt="Product" />
        <span>INR 22,000 /-</span>
        <span><button onClick={()=>{addtoCarthandler({price:10000,name:"Iphone-11"})}}>Add to cart</button></span>
        <span><button onClick={()=>{removetoCarthandler()}}>Remove</button></span>
    </div>
    )
}

const Home = (props) =>{
    const {addtoCarthandler, removetoCarthandler, carData = {}} = props;
    console.log("all props--",props)
    return (
    <div>
        <Header addtoCarthandler = {addtoCarthandler}  carData = {carData}/>
        <Products addtoCarthandler = {addtoCarthandler} removetoCarthandler={removetoCarthandler}/>
    </div>
    )
}

export default Home