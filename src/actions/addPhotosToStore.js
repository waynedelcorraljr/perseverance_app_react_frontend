export const addPhotosToStore = (photos) => {
    console.log(photos)
    return (dispatch) => {
        dispatch({ type: 'ADD_PHOTOS', photos })
    }
}