import React, {Component} from 'react'

import friend1 from "../../../../images/temp/friend1.jpg"
import friend2 from "../../../../images/temp/friend2.jpg"
import friend3 from "../../../../images/temp/friend3.jpg"
import friend4 from "../../../../images/temp/friend4.jpg"
import friend5 from "../../../../images/temp/friend5.jpg"
import friend6 from "../../../../images/temp/friend6.jpg"
import friend7 from "../../../../images/temp/friend7.jpg"
import friend8 from "../../../../images/temp/friend8.jpg"
import friend9 from "../../../../images/temp/friend9.jpg"
import friend10 from "../../../../images/temp/friend10.jpg"
import friend11 from "../../../../images/temp/friend11.jpg"
import friend12 from "../../../../images/temp/friend12.jpg"

export default class FriendList extends Component
{
    render() 
    {
        return(
            <div className="w-full h-auto mx-auto mb-4 mt-4 bg-white border rounded-lg justify-center fl-images panel">  
                <div class="pl-title m-2 mt-2 mb-2 grid grid-cols-2" >                    
                    <div class="text-blue-600 bg-purple rounded-lg" href="#">                        
                        <i class="fas fa-user-friends mr-2"></i>
                        <span class="text-black font-medium">Friends</span>
                        <span class="text-gray-500 font-normal ml-2">                             
                            18</span>
                    </div>
                    <div class="text-blue-500 bg-purple text-right rounded-lg mr-2" href="#">                        
                    <i class="fas fa-ellipsis-h mr-2"></i>
                    </div>
                </div>

                <div className="float-none grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mt-4 ml-2 mr-2">                    
                    <div class="fl-attr">
                        <img src={friend1}/>
                        <span class="text-gray show-hover">Krishna S Santosh</span>
                    </div>
                                   
                    <div class="fl-attr">
                        <img src={friend2}/>
                        <span class="text-gray show-hover">Siddharth Sid</span>
                    </div>

                    <div class="fl-attr">
                        <img src={friend3}/>
                        <span class="text-gray show-hover">Ponnarath Subramanian</span>
                    </div>           
                    <div class="fl-attr">
                        <img src={friend4}/>
                        <span class="text-gray show-hover">L Sureshkumar Lsk</span>
                    </div>
                                   
                    <div class="fl-attr">
                        <img src={friend5}/>
                        <span class="text-gray show-hover">Kamakshi Gottimukala</span>
                    </div>
                    <div class="fl-attr">
                        <img src={friend6}/>
                        <span class="text-gray show-hover">Rashmi Solanki</span>
                    </div>
                    <div class="fl-attr">
                        <img src={friend7}/>
                        <span class="text-gray show-hover">Nishant Vaikartana Das</span>
                    </div>
                                   
                    <div class="fl-attr">
                        <img src={friend8}/>
                        <span class="text-gray show-hover">Þórsteinn Stilwell</span>
                    </div>

                    <div class="fl-attr">
                        <img src={friend9}/>
                        <span class="text-gray show-hover">Tina Ensley</span>
                    </div>                
                </div>
                  
          </div>
        )
    }
}