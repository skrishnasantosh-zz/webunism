import React, { Component } from 'react'
import avatar from '../images/mannequin.svg'

export default class FriendListMini extends Component {
    render() {
        return(
            <aside className="card bg-light">
                <div className="card-header">
                    <span>
                        <i className="fa fa-users"/>
                        &nbsp;
                        Friends
                    </span>
                </div>
                <div className="card-body">                                        
                    <div className="card-text text-center">
                        <ul className="list-group list-group-horizontal-sm">
                            <li className="list-group-item">
                                <img src={avatar} height="100px" width="100px"/>
                                <br/>
                                Krishna S Santosh
                            </li>
                        </ul>                
                    </div>
                </div>
            </aside>
        )
    }
}