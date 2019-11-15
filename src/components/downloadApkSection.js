import React from 'react'
import './componentsCSS/downloadapk.css'
import PhoneImg from '../Assests/Images/phona.png'
import AppleLogo from '../Assests/Images/apple.png'
import AndriodLogo from '../Assests/Images/andr.png'
const downloadApkSeaction = () => {
    return (
        <React.Fragment>
            <div className='colum'>
                <div className="col_1">
                    <section>
                        <h2>Get the most of the </h2>
<h2>One Kiosk Service</h2>
<h2>Download the app now</h2>
                            <br />
                            
                           <img className="downloadlink" src={AppleLogo}/> <img className="downloadlink" src={AndriodLogo}/>

                    </section>
               </div>
                
               <div className="col_2">
                    <img src={PhoneImg} alt='one kiosk mobile image'/>
                    </div>
                     
                
            </div>
        </React.Fragment>
    )
}
export default downloadApkSeaction