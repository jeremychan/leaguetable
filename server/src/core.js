import {Map, List} from 'immutable';

export function addResult(state, result) {
    const home = result.homeTeam;
    const away = result.awayTeam;
    const winner = result.winner;
    return state.updateIn(['results'], list => list.concat(result))
        .updateIn(['standing', home.toString(), 'played'], 0, played => played + 1)
        .updateIn(['standing', away.toString(), 'played'], 0, played => played + 1)
        .updateIn(['standing', winner.toString(), 'won'], 0, won => won + 1)
}

export const INITIAL_STATE = Map({
    standing: Map(),
    results: List()
});