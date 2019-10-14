const Race = require('./src/service/RaceService');
const FileHelper = require('./src/helper/FileHelper');

function init() {
  const race = new Race({ fileHandler: new FileHelper() });
  race.loadData('race_log.txt');
  const result = race.getResult();

  race.save('race_out.csv', result);
}

init();
