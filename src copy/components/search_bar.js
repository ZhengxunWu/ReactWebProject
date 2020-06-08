import React, {Component} from "react"

//need to add some functioanlity to see/use/store what user inputs
//change from functional component to class based component
// const search_bar = () => {
//   return <input/>;
// }
class Search_bar extends Component {
  constructor(props) {
    super(props);

    this.state={search_content: ""};

    this.handleInputChange=this.handleInputChange.bind(this);
  }


  render() {
   
    
    return (
      //use curly braces for javascript code in jsx
      
      <div className="search-bar">
            
            <input 
            value={this.state.search_content}
            onChange={this.handleInputChange} 
            />
            
            
      </div>
     
    );
  }

  handleInputChange(event){
    
    this.setState({search_content: event.target.value});
    //console.log(event.target.value);
    this.props.onSearchBarChange(event.target.value);
  }
}


export default Search_bar