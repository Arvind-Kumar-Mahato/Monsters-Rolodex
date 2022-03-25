import logo from './logo.svg';
import './App.css';
import {Component} from 'react'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/Search_box.component';


class App extends Component {
constructor(){
  super();
  this.state = {

    monsters:[],
    searchField:'',
  }
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((Response)=>Response.json())
   .then((users)=> this.setState(()=>{
     return{monsters:users}
   },
   ()=>{
     console.log(this.state)
   }
   ))
  
}

onSearchChange = (event)=>{
  console.log(event.target.value)
  const searchField = event.target.value.toLocaleLowerCase();
 
  this.setState(()=>{
    return{ searchField}
  })
}
  render(){
    const {monsters,searchField} = this.state;
    const {onSearchChange} = this;

    const filtermonster = monsters.filter((monster)=>{
      return  monster.name.toLocaleLowerCase().includes(searchField)
      })
    return (
      <div className="App">
        <h1 className='app-title'> Monsters Rolodex</h1>
        {/* {
          filtermonster.map((monster)=>{
            return<h1 key = {monster.id}>{monster.name}</h1>
          })
        } */}
        <SearchBox onChangeHandler = {onSearchChange} 
        className ='monster-search-box' 
        placeholder='search-monsters' />
        <CardList monsters= {filtermonster}/>
      </div>
    );
  }
  
  
}


export default App;
