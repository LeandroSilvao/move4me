import axios from 'axios'
import config from '../../config'

export default function handler(req, res) {
    const { username, password } = req.query
    return axios.post(`${config.urlGitLabAuth}${username}&password=${password}`)
        .then(resp => res.json(resp.data))
        .catch(error => res.status(500).send(error))
}