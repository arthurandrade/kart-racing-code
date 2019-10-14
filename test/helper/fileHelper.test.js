const FileHelper = require('./../../src/helper/FileHelper');
const NoExistFileError = require('../../src/helper/errors/NoExistFileError');

describe('testing FileHelper', () => {
  const fileHelper = new FileHelper();
  test('should read file', () => {});
  const data = fileHelper.loadFile('race_log.txt');
  expect(data).toEqual([
    {
      lap: 1,
      lapTime: 62.852,
      pilotId: '038',
      pilotName: 'F.MASSA',
      time: '23:49:08.277',
      velocity: 44.275,
    },
    {
      lap: 1,
      lapTime: 64.352,
      pilotId: '033',
      pilotName: 'R.BARRICHELLO',
      time: '23:49:10.858',
      velocity: 43.243,
    },
    {
      lap: 1,
      lapTime: 64.108,
      pilotId: '002',
      pilotName: 'K.RAIKKONEN',
      time: '23:49:11.075',
      velocity: 43.408,
    },
    {
      lap: 1,
      lapTime: 64.414,
      pilotId: '023',
      pilotName: 'M.WEBBER',
      time: '23:49:12.667',
      velocity: 43.202,
    },
    {
      lap: 1,
      lapTime: 78.456,
      pilotId: '015',
      pilotName: 'F.ALONSO',
      time: '23:49:30.976',
      velocity: 35.47,
    },
    {
      lap: 2,
      lapTime: 63.17,
      pilotId: '038',
      pilotName: 'F.MASSA',
      time: '23:50:11.447',
      velocity: 44.053,
    },
    {
      lap: 2,
      lapTime: 64.002,
      pilotId: '033',
      pilotName: 'R.BARRICHELLO',
      time: '23:50:14.860',
      velocity: 43.48,
    },
    {
      lap: 2,
      lapTime: 63.982,
      pilotId: '002',
      pilotName: 'K.RAIKKONEN',
      time: '23:50:15.057',
      velocity: 43.493,
    },
    {
      lap: 2,
      lapTime: 64.805,
      pilotId: '023',
      pilotName: 'M.WEBBER',
      time: '23:50:17.472',
      velocity: 42.941,
    },
    {
      lap: 2,
      lapTime: 67.011,
      pilotId: '015',
      pilotName: 'F.ALONSO',
      time: '23:50:37.987',
      velocity: 41.528,
    },
    {
      lap: 3,
      lapTime: 62.769,
      pilotId: '038',
      pilotName: 'F.MASSA',
      time: '23:51:14.216',
      velocity: 44.334,
    },
    {
      lap: 3,
      lapTime: 63.716,
      pilotId: '033',
      pilotName: 'R.BARRICHELLO',
      time: '23:51:18.576',
      velocity: 43.675,
    },
    {
      lap: 3,
      lapTime: 63.987,
      pilotId: '002',
      pilotName: 'K.RAIKKONEN',
      time: '23:51:19.044',
      velocity: 43.49,
    },
    {
      lap: 3,
      lapTime: 64.287,
      pilotId: '023',
      pilotName: 'M.WEBBER',
      time: '23:51:21.759',
      velocity: 43.287,
    },
    {
      lap: 3,
      lapTime: 68.704,
      pilotId: '015',
      pilotName: 'F.ALONSO',
      time: '23:51:46.691',
      velocity: 40.504,
    },
    {
      lap: 1,
      lapTime: 211.315,
      pilotId: '011',
      pilotName: 'S.VETTEL',
      time: '23:52:01.796',
      velocity: 13.169,
    },
    {
      lap: 4,
      lapTime: 62.787,
      pilotId: '038',
      pilotName: 'F.MASS',
      time: '23:52:17.003',
      velocity: 44.321,
    },
    {
      lap: 4,
      lapTime: 64.01,
      pilotId: '033',
      pilotName: 'R.BARRICHELLO',
      time: '23:52:22.586',
      velocity: 43.474,
    },
    {
      lap: 4,
      lapTime: 63.076,
      pilotId: '002',
      pilotName: 'K.RAIKKONEN',
      time: '23:52:22.120',
      velocity: 44.118,
    },
    {
      lap: 4,
      lapTime: 64.216,
      pilotId: '023',
      pilotName: 'M.WEBBER',
      time: '23:52:25.975',
      velocity: 43.335,
    },
    {
      lap: 4,
      lapTime: 80.05,
      pilotId: '015',
      pilotName: 'F.ALONSO',
      time: '23:53:06.741',
      velocity: 34.763,
    },
    {
      lap: 2,
      lapTime: 97.864,
      pilotId: '011',
      pilotName: 'S.VETTEL',
      time: '23:53:39.660',
      velocity: 28.435,
    },
    {
      lap: 3,
      lapTime: 78.097,
      pilotId: '011',
      pilotName: 'S.VETTEL',
      time: '23:54:57.757',
      velocity: 35.633,
    },
  ]);

  test('should throw error to load file without pathFile', () => {});
  expect(() => {
    fileHelper.loadFile();
  }).toThrow(NoExistFileError);

  test('should throw error to create file without pathFile', () => {});
  expect(() => {
    fileHelper.writeFile();
  }).toThrow(NoExistFileError);
});
