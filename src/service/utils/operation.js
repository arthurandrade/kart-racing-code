const { convertNumberToString } = require('../../helper');

const groupLapsByPilot = laps => {
  const pilots = {};
  for (const lap of laps) {
    const key = lap.pilotId;

    if (pilots[key] === undefined) {
      pilots[key] = [];
    }

    pilots[key].push(lap);
  }

  return Object.values(pilots);
};

const getResultByPilot = pilots => {
  const results = [];

  for (const pilot of pilots) {
    const bestOfPilot = pilot.reduce(
      (acc, current) => {
        const { bestLapTime } = acc;

        acc.pilotId = current.pilotId;
        acc.pilotName = current.pilotName;

        acc.totalTime += current.lapTime;
        acc.totalVelocity += current.velocity;
        acc.totalLaps += 1;

        if (current.lapTime < bestLapTime) {
          acc.bestLapTime = current.lapTime;
          acc.bestLap = current.lap;
        }

        return acc;
      },
      { bestLapTime: Infinity, totalTime: 0, totalLaps: 0, totalVelocity: 0 },
    );

    const { totalVelocity, totalLaps } = bestOfPilot;
    bestOfPilot.avgLapSpeed = totalVelocity / totalLaps;
    delete bestOfPilot.totalVelocity;
    results.push(bestOfPilot);
  }

  return results;
};

const defineWinners = (a, b) => {
  if (a.totalLaps <= b.totalLaps && a.totalTime > b.totalTime) {
    return 1;
  }

  return -1;
};

const sortPilot = pilotResult => {
  const sortedResult = pilotResult.sort(defineWinners);

  return sortedResult;
};

const formatResult = (positions, festerLap) => {
  const totalTimeFirstPilot = positions[0].totalTime;

  return positions.map((p, index) => {
    p.finishPosition = index + 1;
    p.timeAfterFirstPilot = convertNumberToString(
      p.totalTime - totalTimeFirstPilot,
    );

    p.totalTime = convertNumberToString(p.totalTime);
    p.avgLapSpeed = convertNumberToString(p.avgLapSpeed, false).replace(
      '.',
      ',',
    );
    p.bestLapTime = convertNumberToString(p.bestLapTime);
    p.isFesterLap = festerLap.pilotId === p.pilotId;

    return p;
  });
};

const getFasterLap = positions => {
  return positions.reduce((acc, current) => {
    return acc.bestLapTime < current.bestLapTime ? acc : current;
  });
};

module.exports = {
  groupLapsByPilot,
  getResultByPilot,
  sortPilot,
  getFasterLap,
  formatResult,
};
