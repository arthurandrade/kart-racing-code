const { convertNumberToString } = require('../../helper');

const groupLapsByPilot = laps => {
  const pilots = {};
  for (const lap of laps) {
    const id = lap.pilotId;

    if (pilots[id] === undefined) {
      pilots[id] = [];
    }

    pilots[id].push(lap);
  }

  return Object.values(pilots);
};
const orderAscByLap = (a, b) => {
  if (a.lap >= b.lap) {
    return 1;
  }

  return -1;
};
const getResultByPilot = pilots => {
  const results = [];

  for (const pilot of pilots) {
    const sortedLaps = pilot.sort(orderAscByLap);
    const pilotStatistics = sortedLaps.reduce(
      (acc, current) => {
        const { bestLapTime } = acc;

        acc.pilotId = current.pilotId;
        acc.pilotName = current.pilotName;
        acc.totalTime += current.lapTime;
        acc.totalVelocity += current.velocity;
        acc.totalLaps = current.lap;

        if (current.lapTime < bestLapTime) {
          acc.bestLapTime = current.lapTime;
          acc.bestLap = current.lap;
        }

        return acc;
      },
      { bestLapTime: Infinity, totalTime: 0, totalLaps: 0, totalVelocity: 0 },
    );

    const { totalVelocity, totalLaps } = pilotStatistics;
    pilotStatistics.avgLapSpeed = totalVelocity / totalLaps;
    delete pilotStatistics.totalVelocity;
    results.push(pilotStatistics);
  }

  return results;
};

const defineWinnersRule = (a, b) => {
  if (a.totalLaps <= b.totalLaps && a.totalTime > b.totalTime) {
    return 1;
  }

  return -1;
};

const sortPilot = pilotResult => {
  const sortedResult = pilotResult.sort(defineWinnersRule);

  return sortedResult;
};

const formatRaceResult = (positions, festerLap) => {
  const totalTimeFirstPilot = positions[0].totalTime;

  return positions.map((p, index) => {
    p.finishPosition = index + 1;
    p.timeAfterFirstPilot = convertNumberToString(
      p.totalTime - totalTimeFirstPilot,
    );
    p.totalTime = convertNumberToString(p.totalTime);
    p.avgLapSpeed = p.avgLapSpeed
      .toFixed(3)
      .toString()
      .replace('.', ',');
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
  formatRaceResult,
};
