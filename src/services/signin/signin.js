import axios from 'axios'

const signin = payload => axios.post('http://demo6288389.mockable.io/signin', payload)

export default { signin }