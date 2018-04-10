const initialState = {
	repos : []
}

export default function (state = initialState, action) {
	switch(action.type){
		case 'GET_INFO':
			return {...state, repos: action.payload}
		default: 
		return state
	}
}