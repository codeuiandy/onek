import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Anayo from './anayoProject'
import App from '../App'
const Routess = () => {
    return(
    <div>
        <BrowserRouter>
        <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/anayo" component={Anayo}/>
            </Switch>

        </BrowserRouter>
        </div>
        )
}
export default Routess