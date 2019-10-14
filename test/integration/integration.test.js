const FileHelper = require('./../../src/helper/FileHelper');
const Race = require('./../../src/service/RaceService');

const processRace = () => {
  const race = new Race({ fileHandler: new FileHelper() });
  race.loadData('race_log.txt');

  return race.getResult();
};

describe('testing the integration', () => {
  test('should return race result', () => {
    const result = processRace();
    expect(result).toMatchSnapshot();
  });
});
