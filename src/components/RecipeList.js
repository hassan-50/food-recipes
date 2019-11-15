import React, { Component } from 'react';
import Recipe from './Recipe'
import RecipeSearch from './RecipeSearch'
export class RecipeList extends Component {
    render() {
        const {recipes,handlechange,handle,value,submit,error} =this.props
        return (
            <React.Fragment >
                <RecipeSearch value={value} handle={handle} submit={submit}/>
                <div className="container">
                    <div className="row">
                        <div className="col-10 col-md-6 mx-auto text-center font-cl text-uppercase my-5"><h1>recipe list</h1> </div>
                    </div>
                </div>
                <div className="row">
                    {error?<h1 className="text-danger">{error}</h1>: 
                    recipes.map(item=>{
                      return(
                        <Recipe  data={item} id={item.recipe_id} handlechangee={() => handlechange(item.recipe_id,0)}/>
                      )  
                    })
                }
                
                </div>
            </React.Fragment>
        );
    }
}

export default RecipeList;
