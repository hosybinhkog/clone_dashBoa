import React from 'react'

import './sidebar.scss'

import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

import sidebar_items from '../../assets/JsonData/sidebar_routes.json'


const SidebarItem = props => {

    const active = props.active ? 'active' : '' 

    return(
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}


function Sidebar(props) {
    const activeItem = sidebar_items.findIndex(
        item => item.route === props.location.pathname
    )
    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <img src={logo} alt="Logo" />
            </div>
            {
                sidebar_items.map((item,index) => {
                   return <Link to={item.route} key={index}>
                        <SidebarItem 
                            title={item.display_name}
                            icon={item.icon}
                            active={index === activeItem}
                        />
                    </Link>
                })
            }
        </div>
    )
}

export default Sidebar
