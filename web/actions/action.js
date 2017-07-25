import Request from 'superagent';

var apiUrl = "/api/";

export function loadInfo() {
    return dispatch => {

        dispatch({
            type: 'LOAD_INFO_REQUESTED'
        });

        Request.get(apiUrl + 'products')
            .then(result => {
                dispatch({
                    type: 'LOAD_INFO_OK',
                    info: result.data
                })
            })
            .catch(result => {
                dispatch({
                    type: 'LOAD_INFO_FAIL',
                    errors: result.statusText
                })
            })
    }
}