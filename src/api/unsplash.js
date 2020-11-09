import axios from 'axios' 

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID tcoAsrfL0BfOVqzGkDhUa9lCjyyBSHBvNNu4NJpYs_Y'
       } 
})
