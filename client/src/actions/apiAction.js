import axios from 'axios'
import store from '../services/store'

export function getInfo() {
	axios.get('http://api.github.com/users/LeoLugo').then(resp => {
		store.dispatch({
			type: 'GET_INFO',
			payload : resp.data
		})
	})
}