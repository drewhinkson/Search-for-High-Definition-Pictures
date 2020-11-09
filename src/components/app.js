import unsplash from '../api/unsplash'
import React from 'react'
import SearchBar from './SearchBar'
import ImageList from './ImageList'
import RandomPicture from './RandomSearch'

class  App extends React.Component {


    state = {images: [] }
    onSearchSubmit =  async (term) => {
       const response = await unsplash.get('/search/photos', {
            params: {
                query:term,
                per_page: 25
            },
        })
        this.setState ({ images: response.data.results})
    }

    onClickSubmit =  async (term) => {
        const response = await unsplash.get('/photos/random', {
            params: {
               count:15,
               query:term
            },
         })
        this.setState ({images: response.data})
     }
    render() { 
        return (
            <div className ="ui container" style={{marginTop: '15px'}}>
            <SearchBar  onSubmit = {this.onSearchSubmit} />
            <RandomPicture onClick ={this.onClickSubmit} />
            <ImageList  images = {this.state.images}/>
          
        </div>
       )
    }
} 
export default App;