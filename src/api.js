import axios from 'axios';


const API_URL = "https://jacobserver.herokuapp.com"

export const getTopics = () => {
    return (
        axios.get(`${API_URL}/api/topics`)
        .then(({data} )=> data.topic)
    )
}


export const getArticles = (topic) => {
    const url = topic ? `${API_URL}/api/topics/${topic}/articles` : `${API_URL}/api/articles` 
    return (
        axios.get(`${url}`)
        .then(({data})=> data.article)
    )
}