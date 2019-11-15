import React,{Component} from 'react';
import './App.css';
import RecipeList from './components/RecipeList'

import RecipeDetails from './components/RecipeDetails'
import {recipes} from './tempList'
//d3ab033003c2e546e131f5b45402e3e9
class App extends Component {
  state={
    recipes:recipes,
    url:"https://www.food2fork.com/api/search?key=b6fb5d86fb9419eeec1129a9e77a1ada",
    baseurl:"https://www.food2fork.com/api/search?key=b6fb5d86fb9419eeec1129a9e77a1ada"
    ,details_id:35385,
    pageIndex:1,
    search:"",
    error:""
  }
 async getrecipes(){
   try{
    const data = await fetch(this.state.url)
    const jsondata= await data.json()
    if(jsondata.recipes.length === 0){
      this.setState(()=>{
        return {error:"sorry, but your search didn`t return any results"}
      })
      
    }
    else{
    this.setState(()=>{
      return{recipes:jsondata.recipes}
    }) 
  }
  }
  catch(err){
    console.log(err)
  }

  }
  componentDidMount(){
    this.getrecipes()
   }
handlechange = (index) => {
this.setState({
  pageIndex:index
})
}
handlechange1 = (index,id) => {
  console.log(index)
  this.setState({
    details_id:index
   , pageIndex:id
  }) 
  }
  handleinputchange = (e) =>{
    this.setState({
        search:e.target.value
      },(console.log(this.state.search)))
      
    }
    handlesubmit = (e) =>{
      e.preventDefault()
      this.setState({error:""})
       this.setState({url:`${this.state.baseurl}&q=${this.state.search}`,search:""},()=>{this.getrecipes()})
       
      }
     displaypage = () =>{
            switch(this.state.pageIndex){
              default:
                case 1: return <RecipeList error={this.state.error} recipes={this.state.recipes} handlechange={this.handlechange1} submit={this.handlesubmit} value={this.state.search} handle={this.handleinputchange} />
                case 0: return <RecipeDetails id={this.state.details_id} handlechange={this.handlechange} />
            }
            }
  render(){
    // console.log(this.state.recipes)
  return (
    <React.Fragment>
      
      {this.displaypage()}
    </React.Fragment>
  )
  }
}

export default App;
