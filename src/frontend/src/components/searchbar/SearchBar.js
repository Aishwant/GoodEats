import React, { Component } from 'react'

class SearchBar extends Component {
 state = {
   query: '',
 }

 handleInputChange = () => {
   this.setState({
     query: this.search.value
     
   })
 }

 render() {
   return (
     <form>
       <input
         placeholder="Search anything here..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       <p>{this.state.query}</p>
     </form>
      {if(this.search == this.props.restaraunt){
          displayRestaraunt
}}
   )
 }
}

export default SearchBar