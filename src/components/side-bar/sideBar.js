import React, { Component } from 'react';
import './sideBar.css';

class SideBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            activeIndex: 0
        };

        this.iconArray = [
            {
                icon: 'user',
                active: true
            },
            {
                icon: 'info',
                active: false
            },
            {
                icon: 'experience',
                active: false,
            }
        ];
    }

    componentDidMount(){
        window.addEventListener('keydown', (e) => {
            e.preventDefault();
            let activeIndex = this.state.activeIndex;

            if(e.key === 'ArrowUp'){
                this.setState({activeIndex: activeIndex-- <= 0 ? 0 : activeIndex--});
            } else if (e.key === 'ArrowDown'){
                this.setState({activeIndex: activeIndex++ >= this.iconArray.length - 1 ? this.iconArray.length - 1 : activeIndex++});
            }
        })
    }

    render() {
        const iconsJSX = this.iconArray.map((el, index) => {
            return <li key={index} className={this.state.activeIndex === index ? `${el.icon} active` : `${el.icon}`}> {el.icon} </li>
        });
        
        return <div className="sideBar">
            <ul>
                {iconsJSX}
            </ul>
        </div>
    }
}

export default SideBar;