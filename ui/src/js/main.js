import React, {Component} from "react";
import ReactDOM from "react-dom";
import Header from "./components/areas/header/Header";
import NewPost from "./components/bits/NewPost";
import FriendList from "./components/areas/friends/FriendList";

export default class Main extends Component 
{
    render() 
    {
        return (        
            <div>
                <Header/>
                <div className="w-screen flex justify-center">
                    <div className="container w-screen justify-between py-2 pt-0">
                        <div class="flex mb-4 pt-0">
                            <aside class="sm:display-none md:display-none lg:w-3/12 xl:w-3/12 h-12">
                                <FriendList/>
                            </aside>
                            <section class="sm:display-none md:w-8/12 lg:w-7/12 xl:w-7/12 bg-gray-500 h-12 mr-4 ml-4">
                                <NewPost/>
                            </section>
                            <aside class="sm:w-full sm:justify-center md:w-4/12 lg:w-3/12 xl:w-2/12 bg-gray-400 h-12">

                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

let root = document.getElementById("root");
ReactDOM.render(<Main name="Test" />, root);