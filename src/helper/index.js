const Lap = require('./../model/Lap');

const convertTimeToSeconds = time => {
  const [minute, second] = time.split(':').map(Number);
  const seconds = minute * 60 + second;

  return Number(seconds.toFixed(3));
};

const buildLap = line => {
  const lap = new Lap(line);
  lap.lapTime = convertTimeToSeconds(lap.lapTime);

  return lap;
};

const splitLineInformation = line => {
  return line.split(/\s–\s|\s+/);
};

const parseLaps = content => {
  try {
    return content
      .split('\n')
      .splice(1)
      .map(line => splitLineInformation(line))
      .map(line => buildLap(line));
  } catch (e) {
    throw e;
  }
};

const convertNumberToString = (number, includeMinutes = true) => {
  const minutes = Math.trunc(number / 60);
  const secondsAndMilliseconds = (number - minutes * 60).toFixed(3);

  if (includeMinutes) {
    return `${minutes}:${secondsAndMilliseconds}`;
  }

  return secondsAndMilliseconds;
};

module.exports = {
  parseLaps,
  convertNumberToString,
  convertTimeToSeconds,
};
