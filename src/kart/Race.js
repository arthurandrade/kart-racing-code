const {
  groupLapByPilot,
  getResultByPilot,
  sortPilot,
  formatResult,
  getFasterLap,
} = require('./operation');

module.exports = class Race {
  constructor({ laps }) {
    this.laps = laps;
  }

  getResult() {
    const groupedLapsByPilot = groupLapByPilot(this.laps);

    const resultLapsByPilot = getResultByPilot(groupedLapsByPilot);

    const sortedResult = sortPilot(resultLapsByPilot);
    const bestLap = getFasterLap(sortedResult);

    return formatResult(sortedResult, bestLap);
  }
};
