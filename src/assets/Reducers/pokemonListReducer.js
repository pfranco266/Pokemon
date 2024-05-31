const initialPokeList = {
    loading: true,
    error: '',
    list: [],
    initialUrl: `https://pokeapi.co/api/v2/pokemon/`,
    nextUrl: null,
}

function pokeListReducer (state, action) {
    switch (action.type) {
        case 'setPokeList':
            const data = action.payload;
            // console.log('act', action, 'data', data)
            console.log('stateb', state)
            return {
                ...state, 
                loading: false,
                error: data.error,
                list: [ ...state.list, ...data.results],
                nextUrl: data.next,
            };
        case 'setError':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
         case 'setLoading':
            return {
                ...state,
                loading: true,
            };    
        default:
            return state;
    }
};

export { pokeListReducer, initialPokeList}