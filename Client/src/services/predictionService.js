import Api from '../utils/API'

export default {

    async sendUrl(payload) {
        console.log('URL to check: ')
        console.log(payload)
        let response = await Api().post('/', payload)
        console.log('URL from Back End: ')
        console.log(response)
    }

}