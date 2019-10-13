const { readFileSync, writeFileSync } = require('fs');

const recoverLaps = file => {
  const laps = readFileSync(file, 'utf8');

  return parseLaps(laps);
};

const convertTimeToSeconds = time => {
  const splittedTime = time.split(':').map(Number);
  const seconds = splittedTime[0] * 60 + splittedTime[1];
  return Number(seconds.toFixed(3));
};

const convertNumberToString = (number, includeMinutes = true) => {
  const minutes = Math.trunc(number / 60);
  const secondsAndMilliseconds = (number - minutes * 60).toFixed(3);

  if (includeMinutes) {
    return `${minutes}:${secondsAndMilliseconds}`;
  }
  return secondsAndMilliseconds;
};

const parseLaps = content => {
  return content
    .split('\n')
    .splice(1)
    .map(line => line.split(/\s–\s|\s+/))
    .map(line => {
      const [time, pilotId, pilotName, lap, lapTime, velocity] = line;
      return {
        time,
        pilotId,
        pilotName,
        lap: Number(lap),
        lapTime: convertTimeToSeconds(lapTime),
        velocity: Number(velocity.replace(',', '.')),
      };
    });
};

const writeFile = content => {
  const keys =
    'Posição Chegada;Código Piloto;Nome Piloto;Qtde Voltas Completadas;Tempo Total;Melhor Tempo;Melhor Volta;Velocidade Media;Diferença Do Vencedor;Possui a volta mais Rápida\n';

  const out = content
    .map(result => {
      return (
        `${result.finishPosition};` +
        `${result.pilotId};` +
        `${result.pilotName};` +
        `${result.totalLaps};` +
        `${result.totalTime};` +
        `${result.bestTime};` +
        `${result.bestLap};` +
        `${result.averageTime};` +
        `${result.timeAfterFirstPilot};` +
        `${result.isFesterLap}`
      );
    })
    .join('\n');

  const result = [keys + out];

  writeFileSync('race_out.csv', result, 'utf8');
};

module.exports = {
  recoverLaps,
  parseLaps,
  writeFile,
  convertNumberToString,
};
