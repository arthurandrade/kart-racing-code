const { recoverLaps } = require('./../../src/helper');
const Race = require('./../../src/kart/Race');

const processRace = () => {
  const laps = recoverLaps('race_log.txt');
  const race = new Race({ laps });

  return race.getResult();
};

describe('testing the integration', () => {
  test('should return race result', () => {
    const result = processRace();
    expect(result).toMatchSnapshot();
  });
});
