import React, { useEffect } from 'react'
import Sidebar from '../sidebar'
import Routers from '../Routers'

import './layout.scss';

import TopNav from '../topnav'

import { BrowserRouter , Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import ThemeAction from '../../actions/ThemeAction'
function Layout() {
    const themeReducer = useSelector(state => state.ThemeReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(ThemeAction.setMode(themeClass))

        dispatch(ThemeAction.setColor(colorClass))
    }, [dispatch])

    return (
       <BrowserRouter>
            <Route render={(props) => (
                <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                    <Sidebar {...props} />
                    <div className="layout__content">
                        <TopNav />
                        <div className="layout__content-main">
                            <Routers />
                        </div>
                    </div>
                </div>
            )}/>
       </BrowserRouter>
    )
}

export default Layout
