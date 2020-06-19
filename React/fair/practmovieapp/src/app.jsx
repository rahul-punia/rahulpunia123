import React from 'react';
import Moviespage from "./homepage";
import {Route,Switch,Redirect} from "react-router-dom";
import Login from './components/login';
import Rental from './components/rental';
import Customers from './components/customer';
import PageNotFound from "./components/pageNotFound";
import Navbar from "./components/navigation";
const App = () => {
    return ( 
        <React.Fragment>
           <Navbar></Navbar>
           <Switch>
               <Route path="/login" component={Login}></Route>
               <Route path="/customers" component={Customers}></Route>
               <Route path="/rentals" component={Rental}></Route>
               <Route path="/home" component={Moviespage}></Route>
               <Redirect from="/movies" to="/home"></Redirect>
               <Route from="/" exact component={Moviespage}></Route>
               <Route from="/:route" component={PageNotFound}></Route>
           </Switch>
           </React.Fragment>
     );
}
 
export default App;