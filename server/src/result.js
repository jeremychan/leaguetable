import Team from '../src/team'

export default class Result {

    constructor(input) {

        const re = /^([^\s]+?)\s+([^\s]+?)\s+(\d+?)\s*-\s*(\d+?)\s+([^\s]+?)\s+([^\s]+)$/;
        const result = re.exec(input);

        this.home = {
            team: new Team(result[1], result[2]),
            score: Number(result[3])
        };
        this.away = {
            team: new Team(result[5], result[6]),
            score: Number(result[4])
        }
    }
}