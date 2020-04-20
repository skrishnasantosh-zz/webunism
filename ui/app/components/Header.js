import React from 'react'

const Header = () => (
    <header>
        <nav className="navbar is-fixed-top is-link" role="navigation" aria-label="main navigation">
            <div className="container">                
                <div className="navbar-start">
                    <a className="navbar-item">
                        <i className="fa fa-search"/>
                    </a>
                </div>
                <div className="navbar-end">                    
                    <a className="navbar-item">
                        <i className="fa fa-home"/>
                        &nbsp; Home
                    </a>                
                    <a className="navbar-item">
                        <i className="fa fa-plus-circle"/>
                        &nbsp; New
                    </a>                                    
                    <a className="navbar-item" disabled>

                    </a>
                    <a className="navbar-item">
                        <i className="fa fa-users"/>                    
                    </a>                
                    <a className="navbar-item">
                        <i className="fa fa-bell"/>
                    </a>                
                    <a className="navbar-item">
                        <i className="fa fa-comments"/>                    
                    </a>                
                    <a className="navbar-item">
                        <i className="fa fa-cog"/>
                    </a>
                    <a className="navbar-item" disabled>

                    </a>
                    <a className="navbar-item last-nav">
                        <i className="fa fa-user"/>                    
                    </a>                
                </div>
            </div>
        </nav>
    </header>
)

export default Header