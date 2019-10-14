/* eslint-disable class-methods-use-this */
const { existsSync, readFileSync, writeFileSync } = require('fs');
const { parseLaps } = require('./index');
const NoExistFileError = require('./errors/NoExistFileError');

module.exports = class FileHelper {
  loadFile(filePath) {
    if (!existsSync(filePath)) throw new NoExistFileError(filePath);
    const laps = readFileSync(filePath, 'utf8');

    return parseLaps(laps);
  }

  writeFile(filePath, content) {
    if (!filePath) throw new NoExistFileError(filePath);
    const keys =
      'Posição Chegada;Código Piloto;Nome Piloto;Qtde Voltas Completadas;Tempo Total;Melhor Tempo;Melhor Volta;Velocidade Media;' +
      'Diferença Do Vencedor;Possui a volta mais Rápida\n';

    const out = content
      .map(result => {
        return (
          `${result.finishPosition};${result.pilotId};${result.pilotName};${result.totalLaps};${result.totalTime};${result.bestLapTime};` +
          `${result.bestLap};${result.avgLapSpeed};${result.timeAfterFirstPilot};${result.isFesterLap}`
        );
      })
      .join('\n');

    const result = keys + out;

    writeFileSync(filePath, result, 'utf8');
  }
};
