import React, {Component} from 'react'
import avatar from "../../../images/temp/friend10.jpg"

export default class NewPost extends Component
{
    render() {
        return(
            <div class="max-w-sm w-full lg:max-w-full lg:flex mb-4 mt-4 border flex flex-col justify-between leading-normal rounded-lg">
            <div class="max-w-full bg-white rounded-lg p-4 flex flex-col">
            <div class="flex items-center">
                <img class="w-10 h-10 rounded-full mr-4" src={avatar} alt="Avatar of Jonathan Reinink"/>
                <div class="text-sm">
                  <p class="text-gray-900 leading-none">Krishna S Santosh</p>
                  <p class="text-gray-600">Today</p>
                </div>
              </div>
              <div class="mb-8">
                <p class="text-sm text-gray-600 flex items-center">
                  &nbsp;
                </p>
                
                <div  contentEditable="true" class="text-gray-700 text-base outline-none" id="newPost" tabIndex="0" data-key="" onKeyDown={this.handleNewKey}>                    
                    <span id="npText" placeholder="What do you want to share / ask?">
                       What do you want to type/share? 
                    </span>
                </div>
                
              </div>              
            </div>
          </div>
        )
    }

    handleNewKey(e)
    {        
    
    }
}