import React, {Component} from 'react'

export default class HeaderArea extends Component {
    render() { 
        return(
            <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">Webunism</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span>
                                        <i className="fa fa-home"/>
                                        &nbsp; Home
                                    </span>                                    
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span>
                                        <i className="fa fa-plus"/>
                                        &nbsp; New
                                    </span>                                    
                                </a>
                            </li>
                            <li className='nav-item nav-divider nav-separator'>
                                <a href="#">
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span>
                                        <i className="fa fa-users"/>
                                    </span>                                    
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span>
                                        <i className="fa fa-comments"/>
                                    </span>                                    
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span>
                                        <i className="fa fa-bell"/>
                                    </span>                                    
                                </a>
                            </li>
                            <li className='nav-item nav-divider nav-separator'>
                                <a href="#">
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span>
                                        <i className="fa fa-cog"/>
                                    </span>                                    
                                </a>
                            </li>                            
                        </ul>
                        <form className="form-inline ml-auto">
                            <div className="input-group">                            
                                <input type="text" className="form-control" placeholder="Search..." aria-label="Search" aria-describedby="basic-addon1"/>
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon1">
                                        <i className="fa fa-search"/>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
          </nav>
        );
    }
}