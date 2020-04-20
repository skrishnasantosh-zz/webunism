import React, {Component} from "react";
import ReactDOM from "react-dom";
import HeaderArea from "./components/HeaderArea";
import CoverPicture from "./components/CoverPicture";
import CoverProfile from "./components/CoverProfile";
import FriendListMini from "./components/FriendListMini";

export default class App extends Component {
    render() {
        return (            
            <div>                
                <HeaderArea/>
                <CoverPicture/>
                <CoverProfile/>
                <div>
                    &nbsp;
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-3">
                            <FriendListMini/>
                        </div>
                        <div class="col-7">
                            <div className="card bg-light">
                            </div>
                        </div>
                        <div class="col-2">
                            <div className="card bg-light">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

let $App = document.getElementById("app");
ReactDOM.render(<App />, $App);