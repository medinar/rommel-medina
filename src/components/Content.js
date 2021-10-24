import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import About from './About';
import Services from './Services';
import Contacts from './Contacts';
import Header from './Header';
import Portfolio from './Portfolio';

const Content = () => {
    return (
        <HashRouter>
            <div className="content">
                <Route exact path="/" component={Header}/>
                <Route path="/about" component={About}/>
                <Route path="/services" component={Services}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/contacts" component={Contacts}/>                            
            </div>
        </HashRouter>
    );
}

export default Content;
