import React from 'react';
import Navbar from './navbar'
import Search from '../Assests/Images/icon.png'
import './componentsCSS/anayo.css'
import mapimage from '../Assests/Images/buyless.png'
import bikeimg from '../Assests/Images/payless.png'
import openbtn from '../Assests/Images/open.png'
import closebtn from '../Assests/Images/close.png'
const anayo = () => {
    return (
        <React.Fragment>
            
<Navbar/>
            
            <hr />
            <div>
            <div className="modalParr">
                <h1>Stores</h1>
                
                <div class="buttonInsides">
                        <input className='inputbox' placeholder="Search" type="text" />
                        <i className="search fa fa-search"></i>
                    
                        </div>


                    </div>
            </div>

            <div className="productWrapper">
                  
                <div className="products">
            
                <div  className="productss ">
                        <img className="productImg" src={mapimage} />
                           <hr/>
                 
                        <div className="productStore" >
                            <p>Regulr Store</p> 
                            <div><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i></div>
                        </div>
                        <div className="flexcon">
                        <div className="flexch1">
                            <div className="sellerstore">
                                <button>Food</button>
                                <button>Cloths</button>
                                    <button>Drinks</button>
                                    <button>Vegetables</button>
                                    
                                </div>
                            </div>
                            <div className="flexch2">
                                <img className="shopbtn" src={closebtn}/>
                            </div>
                        </div>
                    </div>
                    <div className="productss">
                        <img className="productImg" src={bikeimg} />
                        <hr/>
                        <div className="productStore" >
                            <p>Regulr Store</p> 
                            <div><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i></div>
                        </div>
                           
                           <div className="flexcon">
                        <div className="flexch1">
                            <div className="sellerstore">
                                <button>Food</button>
                                <button>Cloths</button>
                                    <button>Drinks</button>
                                    <button>Vegetables</button>
                                    
                                </div>
                            </div>
                            <div className="flexch2">
                                <img className="shopbtn" src={openbtn}/>
                            </div>
                        </div>
                    
                    </div>
                    
                    <div className="productss">
                        <img className="productImg" src={mapimage} />
                        <hr/>
                        <div className="productStore" >
                            <p>Regulr Store</p> 
                            <div><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i></div>
                        </div>
                        <div className="flexcon">
                        <div className="flexch1">
                            <div className="sellerstore">
                                <button>Food</button>
                                <button>Cloths</button>
                                    <button>Drinks</button>
                                    <button>Vegetables</button>
                                    
                                </div>
                            </div>
                            <div className="flexch2">
                                <img className="shopbtn" src={closebtn}/>
                            </div>
                        </div>
                </div>
                
                <div className="productss ">
                        <img className="productImg" src={bikeimg} />
                        <hr/>
                        <div className="productStore" >
                            <p>Regulr Store</p> 
                            <div><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i></div>
                        </div>
                        <div className="flexcon">
                        <div className="flexch1">
                            <div className="sellerstore">
                                <button>Food</button>
                                <button>Cloths</button>
                                    <button>Drinks</button>
                                    <button>Vegetables</button>
                                    
                                </div>
                            </div>
                            <div className="flexch2">
                                <img className="shopbtn" src={openbtn}/>
                            </div>
                        </div>
                    </div>

                    <div className="productss">
                        <img className="productImg" src={mapimage} />
                        <hr/>
                        <div className="productStore" >
                            <p>Regulr Store</p> 
                            <div><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i></div>
                        </div>
                        <div className="flexcon">
                        <div className="flexch1">
                            <div className="sellerstore">
                                <button>Food</button>
                                <button>Cloths</button>
                                    <button>Drinks</button>
                                    <button>Vegetables</button>
                                    
                                </div>
                            </div>
                            <div className="flexch2">
                                <img className="shopbtn" src={openbtn}/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="productss">
                        <img className="productImg" src={bikeimg} />
                        <hr/>
                        <div className="productStore" >
                            <p>Regulr Store</p> 
                            <div><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i></div>
                        </div>
                        <div className="flexcon">
                        <div className="flexch1">
                            <div className="sellerstore">
                                <button>Food</button>
                                <button>Cloths</button>
                                    <button>Drinks</button>
                                    <button>Vegetables</button>
                                    
                                </div>
                            </div>
                            <div className="flexch2">
                                <img className="shopbtn" src={closebtn}/>
                            </div>
                        </div>
                </div>

                <div className="productss">
                        <img className="productImg" src={mapimage} />
                           <hr/>
                           <div className="productStore" >
                            <p>Regulr Store</p> 
                            <div><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i></div>
                        </div>
                        <div className="flexcon">
                        <div className="flexch1">
                            <div className="sellerstore">
                                <button>Food</button>
                                <button>Cloths</button>
                                    <button>Drinks</button>
                                    <button>Vegetables</button>
                                    
                                </div>
                            </div>
                            <div className="flexch2">
                                <img className="shopbtn" src={openbtn}/>
                            </div>
                        </div>
                </div>

                <div className="productss">
                        <img className="productImg" src={bikeimg} />
                        <hr/>
                        <div className="productStore" >
                            <p>Regulr Store</p> 
                            <div><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i></div>
                        </div>
                        <div className="flexcon">
                        <div className="flexch1">
                            <div className="sellerstore">
                                <button>Food</button>
                                <button>Cloths</button>
                                    <button>Drinks</button>
                                    <button>Vegetables</button>
                                    
                                </div>
                            </div>
                            <div className="flexch2">
                                <img className="shopbtn" src={openbtn}/>
                            </div>
                        </div>
                </div>

                </div>
                <br/>

                </div>
        </React.Fragment>
    )
}

export default anayo