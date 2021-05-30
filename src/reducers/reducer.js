export default function manageData(state = {
    earthdates: [],
    photos: [],
    loading: false
}, action) {
    switch (action.type) {
        case 'LOADING_EARTHDATES':
            return {
                ...state,
                earthdates: [...state.earthdates],
                photos: [...state.photos],
                loading: true
            }
        case 'ADD_EARTHDATES':
            return {
                ...state,
                earthdates: action.earthdates,
                photos: [...state.photos],
                loading: false
            }
        case 'ADD_PHOTOS':
            return {
                ...state,
                earthdates: state.earthdates,
                photos: action.photos,
                loading: false
            }
        default:
            return state
    }
}