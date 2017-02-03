import {List, Map} from 'immutable';
import {expect} from 'chai';

import {setResults, addResult} from '../src/core';
import Result from '../src/result';
import Team from '../src/team';

describe('application logic', () => {

    describe('addResult', () => {

        it('adds the result object to results', () => {
            const result1 = new Result('AB CD 2 - 1 EF GH');
            const result2 = new Result('EF GH 3 - 2 IJ KL');
            const state = Map({
                results: List.of(result1)
            });
            const nextState = addResult(state, result2);
            expect(nextState).to.have.property(
                'results', List.of(result1, result2)
            );
        });

        it('create a table entry for new team', () => {
            const state = Map({
                results: List()
            });
            const result1 = new Result('AB CD 2 - 1 EF GH');
            const nextState = addResult(state, result1);
            expect(nextState).to.equal(Map({
                results: List.of(result1),
                standing: Map({
                    'AB CD': Map({
                        played: 1,
                        won: 1
                    }),
                    'EF GH': Map({
                        played: 1
                    }),
                })
            }));
        });

    });

});