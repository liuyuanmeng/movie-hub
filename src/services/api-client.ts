import axios from 'axios'
export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'e6aec3a70fa8c23ca65f055c9dabc1ac',
  },
})