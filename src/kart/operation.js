const { convertNumberToString } = require('./../helper');

const groupLapByPilot = laps => {
  const pilots = {};
  for (const lap of laps) {
    const key = lap.pilotId;

    if (pilots[key] == undefined) {
      pilots[key] = [];
    }

    pilots[key].push(lap);
  }

  return pilots;
};

const getResultByPilot = pilots => {
  const results = [];

  for (const pilot in pilots) {
    const bestOfPilot = pilots[pilot].reduce(
      (result, current) => {
        const { bestTime } = result;

        result.pilotId = current.pilotId;
        result.pilotName = current.pilotName;

        result.totalTime += current.lapTime;
        result.totalVelocity += current.velocity;
        result.totalLaps++;

        if (current.lapTime < bestTime) {
          result.bestTime = current.lapTime;
          result.bestLap = current.lap;
        }

        return result;
      },
      { bestTime: Infinity, totalTime: 0, totalLaps: 0, totalVelocity: 0 },
    );

    const { totalVelocity, totalLaps } = bestOfPilot;
    bestOfPilot.averageTime = totalVelocity / totalLaps;

    results.push(bestOfPilot);
  }

  return results;
};

const rating = (a, b) => {
  if (a.totalLaps <= b.totalLaps && a.totalTime > b.totalTime) {
    return 1;
  }

  return -1;
};

const sortPilot = pilotResult => {
  const sortedResult = pilotResult.sort(rating);

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
    p.averageTime = convertNumberToString(p.averageTime, false);
    p.totalVelocity = convertNumberToString(p.totalVelocity);
    p.bestTime = convertNumberToString(p.bestTime);
    p.isFesterLap = festerLap.pilotId === p.pilotId;

    return p;
  });
};

const getFasterLap = positions => {
  return positions.reduce((acc, current) => {
    return acc.bestTime < current.bestTime ? acc : current;
  });
};

module.exports = {
  groupLapByPilot,
  getResultByPilot,
  sortPilot,
  getFasterLap,
  formatResult,
};
