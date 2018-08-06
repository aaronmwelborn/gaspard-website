import React, {Component} from 'react';
import './css/App.css';

import {MenuBar} from "./containers/menu-bar";
import {Header} from './containers/header'
import {DescriptionSection} from "./containers/section-description";
import {ProductSection} from "./containers/section-product";
import {ContactSection} from "./containers/section-contact";


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById("menu-bar").style.top = "0";
    } else {
        document.getElementById("menu-bar").style.top = "-10em";
    }
}

class App extends Component {


    render() {
        return (
            <div className="App">
                <MenuBar />
                <Header/>
                <DescriptionSection />
                <ProductSection />
                <ContactSection />
            </div>
        );
    }
}

export default App;
