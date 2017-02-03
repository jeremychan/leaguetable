import {Map, List, fromJS} from 'immutable';
import {expect} from 'chai';
import Result from '../src/result';


import makeStore from '../src/store';

describe('store', () => {

    const result1 = new Result('AB CD 2 - 1 EF GH');

    it('is a Redux store configured with the correct reducer', () => {
        const store = makeStore();
        expect(store.getState()).to.equal(Map({
            standing: Map(),
            results: List()
        }));

        store.dispatch({
            type: 'ADD_RESULT',
            result: result1
        });
        expect(store.getState()).to.equal(fromJS({
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