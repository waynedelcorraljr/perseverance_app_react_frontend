export const fetchEarthdates = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_EARTHDATES' })
        fetch('http://localhost:3000/api/v1/earthdates')
            .then(resp => resp.json())
            .then(earthdates => dispatch({ type: 'ADD_EARTHDATES', earthdates }))
    }
}