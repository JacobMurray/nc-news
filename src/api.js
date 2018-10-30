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

export const getArticleById = (id) => {
    return (

        axios.get(`${API_URL}/api/articles/${id}`)
        .then(({data}) => data.article)
    )
}

export const getArticleComments = (id) => {
    return (
        axios.get(`${API_URL}/api/articles/${id}/comments`)
        .then(({data})=> data.comments)
    )
} 

export const getUserName = (username) => {
    return (
        axios.get(`${API_URL}/api/users/${username}`)
        .then(({data})=> data.user)
    )
}