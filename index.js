const Race = require('./src/kart/Race');
const { recoverLaps, writeFile } = require('./src/helper');

function init() {
  const laps = recoverLaps('race_log.txt');
  const race = new Race({ laps });
  const result = race.getResult();

  writeFile(result);
}

init();
