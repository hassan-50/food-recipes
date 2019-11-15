import React, { Component } from 'react';
import {recipe} from '../tempDetails'
export class Recipe extends Component {
    render() {
        const {
            recipe_id,
            image_url,
            title,
            publisher,
            source_url,
        }=this.props.data
        const {handlechangee} = this.props
        return (
            <React.Fragment>
                <div className="col-10 col-md-6 col-lg-4 my-3 mx-auto">
                <div className="card">
                    <img src={image_url} alt="" className="card-img-top" style={{height:"14rem"}}/>
                        <div className="card-body">
                            <h6 className="font-cl">{title}</h6>
                            <h6 className="font-cl text-warning">{title}</h6>

                           </div>
                        <div className="card-footer">
                            <button className="btn btn-primary text-uppercase" onClick={handlechangee}>details</button>
                            <a href={source_url} target="_blank" rel="noopener noreferrer" className="btn btn-success text-uppercase mx-2 ">recipe url</a>
                            </div>    

                    </div>
                    
                </div>

            </React.Fragment>
        );
    }
}

export default Recipe;
