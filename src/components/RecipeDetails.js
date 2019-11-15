import React, { Component } from 'react';
import {recipe} from '../tempDetails'
export class RecipeDetails extends Component {
    state={
        recipe:recipe
    }
    async componentDidMount(){
    
   try{
    const url=`https://www.food2fork.com/api/get?key=d3ab033003c2e546e131f5b45402e3e9&rId=${this.props.id}`
    const data = await fetch(url)
    const jsondata= await data.json()
    this.setState({
      recipe:jsondata.recipe
    }) 
  }
  catch(err){
    console.log(err)
  }
   
    }

    render() {
        const {handlechange} = this.props
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 col-md-6">
                            <button className="btn btn-warning text-capitalize mt-2 mb-5" onClick={() => handlechange(1)}> back to recipe list</button>
                            <img src={this.state.recipe.image_url} alt="" className="d-block w-100"/>
                        </div>
                        <div className="col-10 col-md-6">
                            <h6 className="font-cl text-uppercase mt-2">{this.state.recipe.title}</h6>
                            <h6 className="font-cl text-uppercase mt-2 text-warning">{this.state.recipe.publisher}</h6>
                            <a href={this.state.recipe.publisher_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-capitalize">publisher webpage</a>
                            <a href={this.state.recipe.publisher_url} target="_blank" rel="noopener noreferrer" className="btn btn-success text-capitalize mx-2">recipe url</a>
                            <h3 className="my-5 text-center">ingrediants</h3>
                            <ul className="list-group">
                            {this.state.recipe.ingredients.map((data,index)=>{
                                    return(
                                        <li className="list-group-item" key={index}>{data} </li>     
                                         )
         
                                     })
                                
                            }
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default RecipeDetails;
