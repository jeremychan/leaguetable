import {List, Map} from 'immutable';
import {expect} from 'chai';

import {setResults, addResult} from '../src/core';

describe('application logic', () => {

    describe('setResults', () => {

        it('sets the results to the state', () => {
            const state = Map();
            const results = ['AB CD 2 - 1 EF GH', 'EF GH 3 - 2 IJ KL'];
            const nextState = setResults(state, results);
            expect(nextState).to.equal(Map({
                results: List.of('AB CD 2 - 1 EF GH', 'EF GH 3 - 2 IJ KL')
            }));
        });

    });

    describe('addResult', () => {

        it('adds the result to results', () => {
            const state = Map({
                results: List.of('AB CD 2 - 1 EF GH')
            });
            const result = 'EF GH 3 - 2 IJ KL';
            const nextState = addResult(state, result);
            expect(nextState).to.equal(Map({
                results: List.of('AB CD 2 - 1 EF GH', 'EF GH 3 - 2 IJ KL')
            }));
        });

    });

});