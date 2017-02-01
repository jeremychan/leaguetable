import {List} from 'immutable';

export function setResults(state, results) {
    return state.set('results', List(results));
}

export function addResult(state, result) {
    return state.update('results', list => list.concat(result));
}