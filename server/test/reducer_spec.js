import {fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';
import Result from '../src/result';

describe('reducer', () => {

    const result1 = new Result('AB CD 2 - 1 EF GH');
    const result2 = new Result('AB CD 1 - 10 EF GH');

    it('handles ADD_RESULT', () => {
        const initialState = fromJS({
            results: [result1],
            standing: {
                'AB CD': {
                    played: 1,
                    won: 1
                },
                'EF GH': {
                    played: 1
                },
            }
        });
        const action = {type: 'ADD_RESULT', result: result2};
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            results: [result1, result2],
            standing: {
                'AB CD': {
                    played: 2,
                    won: 1
                },
                'EF GH': {
                    played: 2,
                    won: 1
                },
            }
        }));
    });

    it('has an initial state', () => {
        const action = {type: 'ADD_RESULT', result: result1};
        const nextState = reducer(undefined, action);
        expect(nextState).to.equal(fromJS({
            results: [result1],
            standing: {
                'AB CD': {
                    played: 1,
                    won: 1
                },
                'EF GH': {
                    played: 1
                },
            }
        }));
    });

});