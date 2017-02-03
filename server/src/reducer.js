import {addResult, INITIAL_STATE} from './core'

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_RESULT':
            return addResult(state, action.result);
    }
    return state;
}