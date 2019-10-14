const {
  groupLapsByPilot,
  getResultByPilot,
  sortPilot,
  formatResult,
  getFasterLap,
} = require('./utils/operation');

module.exports = class RaceService {
  constructor({ fileHandler }) {
    this.fileHandler = fileHandler;
    this.laps = [];
  }

  loadData(filePath) {
    const laps = this.fileHandler.loadFile(filePath);
    this.laps = laps;
  }

  save(filePath, data) {
    this.fileHandler.writeFile(filePath, data);
  }

  getResult() {
    const groupedLapsByPilot = groupLapsByPilot(this.laps);
    const resultLapsByPilot = getResultByPilot(groupedLapsByPilot);
    const sortedResult = sortPilot(resultLapsByPilot);
    const bestLap = getFasterLap(sortedResult);

    return formatResult(sortedResult, bestLap);
  }
};
