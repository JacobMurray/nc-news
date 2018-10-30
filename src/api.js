import axios from 'axios';


const API_URL = "https://jacobserver.herokuapp.com"

export const getTopics = () => {
    return (
        axios.get(`${API_URL}/api/topics`)
        .then(({data} )=> data.topic)
    )
}


export const getArticles = () => {
    return (
        axios.get(`${API_URL}/api/articles`)
        .then(({data})=> data.article)
    )
}