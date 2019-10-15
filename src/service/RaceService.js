const {
  groupLapsByPilot,
  createResultByPilot,
  sortPilot,
  formatRaceResult,
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
    const csvFile = this.fileHandler.buildCsv(data);
    this.fileHandler.writeFile(filePath, csvFile);
  }

  getResult() {
    const groupedLapsByPilot = groupLapsByPilot(this.laps);
    const resultLapsByPilot = createResultByPilot(groupedLapsByPilot);
    const sortedResult = sortPilot(resultLapsByPilot);
    const bestLap = getFasterLap(sortedResult);

    return formatRaceResult(sortedResult, bestLap);
  }
};
