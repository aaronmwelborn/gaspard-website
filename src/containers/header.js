import React, {Component} from 'react';
import alisonMattPic from '../resources/alison-and-matt-1.jpg';

export class Header extends Component {
    render() {
        return (
            <header>
                <div className="App-header">
                    <img src={alisonMattPic} className="App-background-image" alt="bkImage"/>
                    <h1 className="App-title">Gaspard</h1>
                </div>
            </header>
        );
    }
}