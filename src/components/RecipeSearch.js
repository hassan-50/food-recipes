import React, { Component } from 'react';

export class RecipeSearch extends Component {
    render() {
        const {value,handle,submit} =this.props
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row ">
                        <div className="col-10 mx-auto text-center col-md-6">
                        <h1 className="font-cl text-capitalize">search for recipe with <strong className="text-danger"> food2fork</strong> </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10 col-md-8 mx-auto text-center">
                            <h6 className="mt-4 text-capitalize text-center">type recipes seperated by comma</h6>
                            <form onSubmit={submit}>
                                <div className="input-group">
                                    <input type="text" onChange={handle} value={value}  placeholder="chicken,onions,carrots" className="form-control"/>
                                        <div className="input-group-append">
                                            <button type="submit" className="input-group-text bg-primary text-white">
                                                <i className="fas fa-search"></i>
                                            </button>
                                        </div>



                                </div>
        

                            
                                
                                
                                </form>
                        </div>
                    </div>
                            
                        
                </div> 
               
            </React.Fragment>
        );
    }
}

export default RecipeSearch;
