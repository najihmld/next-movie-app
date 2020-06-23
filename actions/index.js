import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

const MOVIE_DATA = []

const CATEGORY_DATA = [
  {id: '1', name: 'drama'},
  {id: '2', name: 'action'},
  {id: '3', name: 'adventure'},
  {id: '4', name: 'historical'},
]

// 1. getCategories functiona
// 2. get categories in index page
// 3. provide categories to sidemenu
// 4. in sidemenu iterate categories and display them

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve(CATEGORY_DATA)
    }, 50)
  })
}

export const getMovies = () => {
//  return new Promise((resolve, reject) => {
//    setTimeout(() =>{
//      resolve(MOVIE_DATA)
//    }, 50)
//  })

  return axios.get(`${BASE_URL}/api/v1/movies`).then((res) =>  res.data)
}

export const createMovie = (movie) => {
  return new Promise((resolve, reject) => {
    //create ID for movie
    movie.id = Math.random().toString(36).substr(2, 7)
    MOVIE_DATA.push(movie)
    setTimeout(() =>{
      resolve(MOVIE_DATA)
    }, 50)
  })
 }

export const getMovieById = (id) => {

  return axios.get(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data)

  // return new Promise((resolve, reject)=> {
  //   // const movieIndex = MOVIE_DATA.findIndex((m) => {
  //   //   return m.id === id
  //   // })
    // const movieIndex = MOVIE_DATA.findIndex((m) => m.id === id)
    // const movie = MOVIE_DATA[movieIndex]
  //   setTimeout(() =>  resolve(movie), 50)
  // })
}