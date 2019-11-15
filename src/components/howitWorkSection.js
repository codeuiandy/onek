import React from 'react'
import './componentsCSS/how.css'
import mapimage from '../Assests/Images/map.png'
import bikeimg from '../Assests/Images/bike.png'
import lady from '../Assests/Images/lady.png'
const HowitWorks = () => {
    return (
        <React.Fragment>
        <div  className="overf">
    
            <div className="csscom">
                    <br />
                    <h1 style={{color:'white'}}>How It Works</h1>
                <div className="gridp">
            
                <div  className="gridchild1 ">
                    <img className="imgp" src={mapimage} />
                 
                            <p>#StoresNearBy</p>
                            <h1>Find and Shop from stores</h1>
                            <h2>Around your Location</h2>
                    </div>
                    <div className="gridchild2">
                    <img className="imgp" src={bikeimg} />
                    <p>#FastDelivery</p>
                            <h1>Have  your orders</h1>
                            <h2>delivered in 59mins"</h2>
                </div>
                
                <div className="gridchild3 ">
                    <img className="imgp" src={lady} />
                    <p>SellYourProducts</p>
                            <h1>Add and Manage 
</h1>
                            <h2>your stores, Make great sales</h2>
                    </div>

                </div>
                <br/>

                </div>
        </div>
    </React.Fragment>
    )
}
export default HowitWorks