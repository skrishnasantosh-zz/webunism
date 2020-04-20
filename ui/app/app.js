import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header'
import CoverArea from "./components/CoverArea";
import ShortFriendList from "./components/ShortFriendList";
import FeedArea from "./components/FeedArea";

class App extends React.Component {
    render() {
        return <section className="section">            
            <Header/>
            <CoverArea/>
            <div className="container">                
                <div className="columns">
                    <div className="column is-3">
                       <ShortFriendList/>
                    </div>
                    <div className="column is-7">
                        <div className="box">

                        </div>
                        <FeedArea/>
                    </div>                    
                    <div className="column is-2 is-half right-align">
                        (ad space)
                    </div>
                </div>
            </div>            
        </section>
    }
}

let $App = document.getElementById("app");

ReactDOM.render(<App />, $App);