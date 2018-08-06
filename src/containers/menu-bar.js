import React, {Component} from 'react';


export class MenuBar extends Component {



    render() {
        return (
          <div id="menu-bar">
              <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Stuff</li>
                  <li>Contact</li>
              </ul>
          </div>
        );
    }
}