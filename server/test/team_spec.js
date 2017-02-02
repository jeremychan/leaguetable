import {expect} from 'chai';

import Team from '../src/team'

describe('team logic', () => {

    it('team convert to string', () => {
        const team = new Team('AB', 'CD');
        expect(team).to.deep.equal({
            p1: 'AB',
            p2: 'CD'
        });
        expect(team.toString()).to.equal('AB CD');
    });
});