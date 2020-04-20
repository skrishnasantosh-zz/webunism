import React, {Component} from 'react'
import ProfilePicture from './ProfilePicture'
import CoverProfileControl from './CoverProfileControls'

export default class CoverProfile extends Component
{
    render() {
        return(
            <div class="container">
                <div class="cover-profile-bg">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8 cover-text">
                            <h3 class="profile-usertitle">
                                Krishna S Santosh
                            </h3>
                        </div>
                        <div className="col-2">
                            <CoverProfileControl/>
                        </div>
                    </div>
                </div>
                <ProfilePicture/>
            </div>
        )
    }
}