import React from 'react'


class SearchBar extends React.Component { 
 
     state = {term: ''};
   
     onFormSubmit = (e) => {
         e.preventDefault();
        this.props.onSubmit(this.state.term);
     }
  
  
  
    render() { 
        return(
        <div className ="ui segment"> 
        <div className="ui fluid icon input;"  > 
        
          <form  onSubmit = {this.onFormSubmit} className="ui form">
              
              <div className ="field">
                  
                  <label>Image Search</label> 
                  
                  <input style={{borderRadius:25}} type ="text"  value ={this.state.term} 
              onChange={(e) => this.setState({term: e.target.value})}   /> 
    
             
              </div>
             
              </form>   
              
              </div>
             </div>
        )
    }
}

export default SearchBar