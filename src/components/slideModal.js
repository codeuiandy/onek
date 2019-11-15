import React from 'react'
import '../components/componentsCSS/modal.css'
const SlideModal = () => {
    return (
        <React.Fragment>
           
                <div className="modalPar">
                <h1 className="modalFirstText">Get the products you</h1> 
                <h1 className="modalSecondText">need delivered in 59mins</h1> 
                <h3 className="modalThrdText">Enter Your Location</h3>

                <div class="buttonInside">
                    <input className='modalInput' placeholder="Country" type="text" />
                    <select className="dropdown">
  
                     
                    <option value="algeria">Algeria</option>
<option value="angola">Angola</option>
<option value="benin">Benin</option>
<option value="botswana">Botswana</option>
<option value="burkina Faso">Burkina Faso</option>
<option value="burundi">Burundi</option>
<option value="cameroon">Cameroon</option>
<option value="cape-verde">Cape Verde</option>
<option value="central-african-republic">Central African Republic</option>
<option value="chad">Chad</option>
<option value="comoros">Comoros</option>
<option value="congo-brazzaville">Congo - Brazzaville</option>
<option value="congo-kinshasa">Congo - Kinshasa</option>
<option value="ivory-coast">Côte d’Ivoire</option>
<option value="djibouti">Djibouti</option>
<option value="egypt">Egypt</option>
<option value="equatorial-guinea">Equatorial Guinea</option>
<option value="eritrea">Eritrea</option>
<option value="ethiopia">Ethiopia</option>
<option value="gabon">Gabon</option>
<option value="gambia">Gambia</option>
<option value="ghana">Ghana</option>
<option value="guinea">Guinea</option>
<option value="guinea-bissau">Guinea-Bissau</option>
<option value="kenya">Kenya</option>
<option value="lesotho">Lesotho</option>
<option value="liberia">Liberia</option>
<option value="libya">Libya</option>
<option value="madagascar">Madagascar</option>
<option value="malawi">Malawi</option>
<option value="mali">Mali</option>
<option value="mauritania">Mauritania</option>
<option value="mauritius">Mauritius</option>
<option value="mayotte">Mayotte</option>
<option value="morocco">Morocco</option>
<option value="mozambique">Mozambique</option>
<option value="namibia">Namibia</option>
<option value="niger">Niger</option>
<option value="nigeria">Nigeria</option>
<option value="rwanda">Rwanda</option>
<option value="reunion">Réunion</option>
<option value="saint-helena">Saint Helena</option>
<option value="senegal">Senegal</option>
<option value="seychelles">Seychelles</option>
<option value="sierra-leone">Sierra Leone</option>
<option value="somalia">Somalia</option>
<option value="south-africa">South Africa</option>
<option value="sudan">Sudan</option>
<option value="south-sudan">Sudan</option>
<option value="swaziland">Swaziland</option>
<option value="Sao-tome-príncipe">São Tomé and Príncipe</option>
<option value="tanzania">Tanzania</option>
<option value="togo">Togo</option>
<option value="tunisia">Tunisia</option>
<option value="uganda">Uganda</option>
<option value="western-sahara">Western Sahara</option>
<option value="zambia">Zambia</option>
<option value="zimbabwe">Zimbabwe</option>

</select>


                    </div>
                    <div class="buttonInside">
                    <input className='modalInput' placeholder="State" type="text" />
                    <select className="dropdown">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>


                    </div>
                <input className='modalInput' placeholder="Address" type="text" />
                <div>

                    <a className='appdownloadBtn'>
                        Download App</a>
                    <a style={{ color: 'white' }} className="shopnowBtn">
                        Shop Now</a>
                </div>
               
                </div>
       
           
         </React.Fragment>
     )
}
 
export default SlideModal