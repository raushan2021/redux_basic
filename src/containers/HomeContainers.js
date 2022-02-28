import {connect} from 'react-redux';
import {addtoCart, removetoCart} from '../service/actions/actions'
import Home from '../components/Home';

const mapStateToProps = state=>{

    console.log("state--",state)
    
    {

   return { carData : state.cartItems }
}
}

const mapDispatchToProps = (dispatch) =>{
    return{ 
        addtoCarthandler:data=>dispatch(addtoCart(data)),
        removetoCarthandler:data=>dispatch(removetoCart(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);