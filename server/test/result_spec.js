import {expect} from 'chai';

import Result from '../src/result'

describe('result construction logic', () => {

    describe('extract input with regex', () => {

        const re = /^([^\s]+?)\s+([^\s]+?)\s+(\d+?)\s*-\s*(\d+?)\s+([^\s]+?)\s+([^\s]+)$/;

        it('basic format', () => {
            const input = 'AB CD 2 - 1 EF GH';
            const result = re.exec(input);
            expect(result[1]).to.equal('AB');
            expect(result[2]).to.equal('CD');
            expect(result[3]).to.equal('2');
            expect(result[4]).to.equal('1');
            expect(result[5]).to.equal('EF');
            expect(result[6]).to.equal('GH');
        });

        it('with spaces', () => {
            const input = ' AB  CD    2  -  1   EF  GH  ';
            const result = re.exec(input.trim());
            expect(result[1]).to.equal('AB');
            expect(result[2]).to.equal('CD');
            expect(result[3]).to.equal('2');
            expect(result[4]).to.equal('1');
            expect(result[5]).to.equal('EF');
            expect(result[6]).to.equal('GH');
        });

        it('extra player', () => {
            const input = ' AB  CD  E  2  -  1   EF  GH  ';
            const result = re.exec(input.trim());
            expect(result).to.be.null;
        });

        it('missing score', () => {
            const input = 'AB CD 2 -  EF GH';
            const result = re.exec(input.trim());
            expect(result).to.be.null;
        });

        it('no space in score', () => {
            const input = 'AB CD 2-1 EF GH';
            const result = re.exec(input.trim());
            expect(result[1]).to.equal('AB');
            expect(result[2]).to.equal('CD');
            expect(result[3]).to.equal('2');
            expect(result[4]).to.equal('1');
            expect(result[5]).to.equal('EF');
            expect(result[6]).to.equal('GH');
        });
    });

    describe('construction', () => {

        it('construct result object', () => {
            const input = 'AB CD 2 - 1 EF GH';
            const result = new Result(input);
            expect(result).to.deep.equal({
                home: {
                    team: {
                        p1: 'AB',
                        p2: 'CD'
                    },
                    score: 2
                },
                away: {
                    team: {
                        p1: 'EF',
                        p2: 'GH'
                    },
                    score: 1
                }
            });
        });

        it('construct result object with team members in alphabetical order', () => {
            const input = 'CD AB 2 - 1 EF GH';
            const result = new Result(input);
            expect(result).to.deep.equal({
                home: {
                    team: {
                        p1: 'AB',
                        p2: 'CD'
                    },
                    score: 2
                },
                away: {
                    team: {
                        p1: 'EF',
                        p2: 'GH'
                    },
                    score: 1
                }
            });
        });

        it('construct result object with team members in upper case', () => {
            const input = 'ab cd 2 - 1 EF GH';
            const result = new Result(input);
            expect(result).to.deep.equal({
                home: {
                    team: {
                        p1: 'AB',
                        p2: 'CD'
                    },
                    score: 2
                },
                away: {
                    team: {
                        p1: 'EF',
                        p2: 'GH'
                    },
                    score: 1
                }
            });
        });
    });

});