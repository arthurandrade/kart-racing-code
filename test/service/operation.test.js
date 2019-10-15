const {
  formatRaceResult,
  getFasterLap,
  getResultByPilot,
  groupLapsByPilot,
  sortPilot,
} = require('../../src/service/utils/operation');
const {
  resultLaps,
  laps,
  sortedResults,
  bestLap,
  groupedLapsByPilot,
} = require('../mock');

describe('testing operations functions', () => {
  test('should return sorted pilot list', () => {
    expect(resultLaps.map(l => l.pilotId)).toEqual(['038', '033', '002']);
    const sortedPilotResult = sortPilot(resultLaps);
    expect(sortedPilotResult.map(l => l.pilotId)).toEqual([
      '038',
      '002',
      '033',
    ]);
  });

  test('should return grouped Laps By Pilot', () => {
    const groupedLapsByPilotData = groupLapsByPilot(laps);
    expect(groupedLapsByPilotData).toEqual([
      [
        {
          lap: 1,
          lapTime: 62.852,
          pilotId: '038',
          pilotName: 'F.MASSA',
          time: '23:49:08.277',
          velocity: 44.275,
        },
        {
          lap: 2,
          lapTime: 63.17,
          pilotId: '038',
          pilotName: 'F.MASSA',
          time: '23:50:11.447',
          velocity: 44.053,
        },
      ],
      [
        {
          lap: 1,
          lapTime: 64.352,
          pilotId: '033',
          pilotName: 'R.BARRICHELLO',
          time: '23:49:10.858',
          velocity: 43.243,
        },
        {
          lap: 2,
          lapTime: 64.002,
          pilotId: '033',
          pilotName: 'R.BARRICHELLO',
          time: '23:50:14.860',
          velocity: 43.48,
        },
      ],
    ]);
  });
  test('should format result', () => {
    const formatedResult = formatRaceResult(sortedResults, bestLap);
    expect(formatedResult).toEqual([
      {
        avgLapSpeed: '44,246',
        bestLap: 3,
        bestLapTime: '1:2.769',
        finishPosition: 1,
        isFesterLap: true,
        pilotId: '038',
        pilotName: 'F.MASS',
        timeAfterFirstPilot: '0:0.000',
        totalLaps: 4,
        totalTime: '4:11.578',
      },
      {
        avgLapSpeed: '43,627',
        bestLap: 4,
        bestLapTime: '1:3.076',
        finishPosition: 2,
        isFesterLap: false,
        pilotId: '002',
        pilotName: 'K.RAIKKONEN',
        timeAfterFirstPilot: '0:3.575',
        totalLaps: 4,
        totalTime: '4:15.153',
      },
      {
        avgLapSpeed: '43,468',
        bestLap: 3,
        bestLapTime: '1:3.716',
        finishPosition: 3,
        isFesterLap: false,
        pilotId: '033',
        pilotName: 'R.BARRICHELLO',
        timeAfterFirstPilot: '0:4.502',
        totalLaps: 4,
        totalTime: '4:16.080',
      },
    ]);
  });
  test('should return best lap', () => {
    const bestLapResult = getFasterLap(sortedResults);
    expect(bestLapResult).toEqual({
      avgLapSpeed: '44,246',
      bestLap: 3,
      bestLapTime: '1:2.769',
      finishPosition: 1,
      isFesterLap: true,
      pilotId: '038',
      pilotName: 'F.MASS',
      timeAfterFirstPilot: '0:0.000',
      totalLaps: 4,
      totalTime: '4:11.578',
    });
  });

  test('should return result by pilot', () => {
    const resultByPilot = getResultByPilot(groupedLapsByPilot);
    expect(resultByPilot).toEqual([
      {
        avgLapSpeed: 44.24575,
        bestLap: 3,
        bestLapTime: 62.769,
        pilotId: '038',
        pilotName: 'F.MASS',
        totalLaps: 4,
        totalTime: 251.578,
      },
      {
        avgLapSpeed: 43.467999999999996,
        bestLap: 3,
        bestLapTime: 63.716,
        pilotId: '033',
        pilotName: 'R.BARRICHELLO',
        totalLaps: 4,
        totalTime: 256.08,
      },
    ]);
  });
});
