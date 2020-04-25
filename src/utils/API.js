import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: `http://localhost:33507/prediction/`
    })
}