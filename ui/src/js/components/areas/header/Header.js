import React, {Component} from 'react'

export default class Header extends Component
{
    render() {
        return(
            <nav className="w-screen flex justify-center bg-blue-500 shadow-md w-px">
                <div className="container w-screen flex justify-between py-2 items-center bg-blue-500 w-px">                
                        <div className="flex-shrink-0 cursor-pointer">
                            <i className="fas fa-spider fa-2x text-blue-600 hover:text-black"></i>
                        </div>                        
                        <i className="fas fa-bars visible md:invisible mr-10 md:mr-0 text-blue-200 cursor-pointer"></i>
                        <ul className="hidden md:flex overflow-x-hidden  font-semibold">
                            <li className="mr-1 p-1">
                                <a className="text-black hover:text-white" href="#">
                                    <i className="fa fa-home"></i>                                    
                                </a>
                            </li>
                            <li className="mr-6 p-1">
                                <a className="text-black hover:text-white" href="#">
                                    <i className="fa fa-plus"></i>
                                    <span className="ml-1">New</span>
                                </a>
                            </li>
                            <li className="mr-2 p-1">
                                <a className="text-black hover:text-white" href="#">
                                    <i className="fa fa-user-friends"></i>
                                </a>
                            </li>
                            <li className="mr-2 p-1">
                                <a className="text-black hover:text-white" href="#">
                                    <i className="fa fa-comments"></i>
                                </a>
                            </li>
                            <li className="mr-6 p-1">
                                <a className="text-black hover:text-white" href="#">
                                    <i className="fa fa-cog"></i>
                                </a>
                            </li>
                            <li className="mr-2 p-1">
                                <a className="text-black hover:text-white" href="#">
                                    <i className="fa fa-user"></i>
                                </a>
                            </li>
                            <li className="ml-6 p1">
                                <div className="relative text-black border flex">
                                    <input type="search" name="serch" placeholder="Search" className="align-items:flex-end bg-orange-100 h-8 px-5 pr-10 text-sm focus:outline-none focus:bg-white"/>
                                    <button type="submit" className="absolute right-0 top-0 mt-1 mr-2">
                                        <i className="fa fa-search h-4 w-4 fill-current"/>
                                    </button>
                                </div>
                            </li>
                        </ul>                
            </div>
          </nav>
        )
    }
}