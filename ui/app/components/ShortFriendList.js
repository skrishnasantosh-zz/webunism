import React, {Component} from 'react'

export default class ShortFriendList extends Component{
    render() { 
        return (
            <article className="panel is-info">
                <p className="panel-heading is-primary">
                    <span>
                        <i className="fa fa-users"></i>
                    </span>
                    &nbsp; Friends
                </p>
                <div className="panel-block">
                    <p className="control has-icons-left">
                        <input className="input is-primary" type="text" placeholder="Search"/>
                        <span className="icon is-left">
                            <i className="fas fa-search" aria-hidden="true"/>
                        </span>
                    </p>
                </div>
            </article>
        )
    }
}