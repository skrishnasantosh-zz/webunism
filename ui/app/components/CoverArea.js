import React, {Component} from 'react'

export default class CoverArea extends Component {
    render() {
        return (
            <div className="container cover-container">
                <div className="columns cover is-info">
                    <div className="column is-12 is-vcentered">
                        
                    </div>                    
                </div>    
                <div className="columns cover-controls">
                    <div className="column is-2">
                    </div>
                    <div className="column is-9">
                        <span className="title profile-usertitle">                            
                            Krishna S Santosh
                        </span>
                    </div>  
                    <div className="column is-1 is-vcentered">                        
                        <div className="columns is-gapless overflow-hidden">
                            <div className="column">
                                <form action="/profile/edit">
                                    <button type="submit" class="button is-link"><span><i class="fa fa-edit"></i></span></button>
                                </form>
                            </div>
                            &nbsp;
                            <div className="column">
                                <form action="/profile/edit">
                                    <button type="submit" class="button is-link"><span><i class="fa fa-list"></i></span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-3">
                        <div className="profile-picture">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}