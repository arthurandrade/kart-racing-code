const { convertNumberToString, parseLaps } = require('../../src/helper');
const { lapsString } = require('./../mock');

describe('testing helpers functions', () => {
  test('should return parsed laps', () => {
    const parsedLaps = parseLaps(lapsString);
    expect(parsedLaps).toEqual([
      {
        lap: 1,
        lapTime: 62.852,
        pilotId: '038',
        pilotName: 'F.MASSA',
        time: '23:49:08.277',
        velocity: 44.275,
      },
      {
        lap: 1,
        lapTime: 64.352,
        pilotId: '033',
        pilotName: 'R.BARRICHELLO',
        time: '23:49:10.858',
        velocity: 43.243,
      },
      {
        lap: 1,
        lapTime: 64.108,
        pilotId: '002',
        pilotName: 'K.RAIKKONEN',
        time: '23:49:11.075',
        velocity: 43.408,
      },
    ]);
  });
  test('should convert number in string', () => {
    const parsedLaps = convertNumberToString(44.275);
    expect(parsedLaps).toEqual('0:44.275');
  });
  test('should convert number in time', () => {
    const parsedLaps = convertNumberToString(44.275, false);
    expect(parsedLaps).toEqual('44.275');
  });
});
