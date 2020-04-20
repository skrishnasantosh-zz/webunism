import React, {Component} from 'react'
import bg from '../images/bg.jpg'

export default class CoverPicture extends Component {
    render() {
        return (            
            <div id="cover-carousel" className="carousel slide container" data-ride="carousel">              
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={bg} height="240px" alt="First slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Some label</h5>
                            <p>another label</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={bg} height="240px" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={bg} height="240px" alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev margin-top-pull-200" href="#cover-carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next margin-top-pull-200" href="#cover-carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}