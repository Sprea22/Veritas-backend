import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: `https://localhost:5000/prediction/`
    })
}