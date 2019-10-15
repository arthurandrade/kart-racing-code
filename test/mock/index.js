const lapsString =
  'Hora                               Piloto             Nº Volta   Tempo Volta       Velocidade média da volta\n' +
  '23:49:08.277      038 – F.MASSA                           1		1:02.852                        44,275\n' +
  '23:49:10.858      033 – R.BARRICHELLO                     1		1:04.352                        43,243\n' +
  '23:49:11.075      002 – K.RAIKKONEN                       1     1:04.108                        43,408';
const resultLaps = [
  {
    bestLapTime: 62.769,
    totalTime: 251.578,
    totalLaps: 4,
    pilotId: '038',
    pilotName: 'F.MASS',
    bestLap: 3,
    avgLapSpeed: 44.24575,
  },
  {
    bestLapTime: 63.716,
    totalTime: 256.08,
    totalLaps: 4,
    pilotId: '033',
    pilotName: 'R.BARRICHELLO',
    bestLap: 3,
    avgLapSpeed: 43.467999999999996,
  },
  {
    bestLapTime: 63.076,
    totalTime: 255.153,
    totalLaps: 4,
    pilotId: '002',
    pilotName: 'K.RAIKKONEN',
    bestLap: 4,
    avgLapSpeed: 43.627250000000004,
  },
];

const laps = [
  {
    time: '23:49:08.277',
    pilotId: '038',
    pilotName: 'F.MASSA',
    lap: 1,
    lapTime: 62.852,
    velocity: 44.275,
  },
  {
    time: '23:49:10.858',
    pilotId: '033',
    pilotName: 'R.BARRICHELLO',
    lap: 1,
    lapTime: 64.352,
    velocity: 43.243,
  },
  {
    time: '23:50:11.447',
    pilotId: '038',
    pilotName: 'F.MASSA',
    lap: 2,
    lapTime: 63.17,
    velocity: 44.053,
  },
  {
    time: '23:50:14.860',
    pilotId: '033',
    pilotName: 'R.BARRICHELLO',
    lap: 2,
    lapTime: 64.002,
    velocity: 43.48,
  },
];
const sortedResults = [
  {
    bestLapTime: 62.769,
    totalTime: 251.578,
    totalLaps: 4,
    pilotId: '038',
    pilotName: 'F.MASS',
    bestLap: 3,
    avgLapSpeed: 44.24575,
  },
  {
    bestLapTime: 63.076,
    totalTime: 255.153,
    totalLaps: 4,
    pilotId: '002',
    pilotName: 'K.RAIKKONEN',
    bestLap: 4,
    avgLapSpeed: 43.627250000000004,
  },
  {
    bestLapTime: 63.716,
    totalTime: 256.08,
    totalLaps: 4,
    pilotId: '033',
    pilotName: 'R.BARRICHELLO',
    bestLap: 3,
    avgLapSpeed: 43.467999999999996,
  },
];

const bestLap = {
  bestLapTime: 62.769,
  totalTime: 251.578,
  totalLaps: 4,
  totalVelocity: 176.983,
  pilotId: '038',
  pilotName: 'F.MASS',
  bestLap: 3,
  avgLapSpeed: 44.24575,
};

const groupedLapsByPilot = [
  [
    {
      time: '23:49:08.277',
      pilotId: '038',
      pilotName: 'F.MASSA',
      lap: 1,
      lapTime: 62.852,
      velocity: 44.275,
    },
    {
      time: '23:50:11.447',
      pilotId: '038',
      pilotName: 'F.MASSA',
      lap: 2,
      lapTime: 63.17,
      velocity: 44.053,
    },
    {
      time: '23:51:14.216',
      pilotId: '038',
      pilotName: 'F.MASSA',
      lap: 3,
      lapTime: 62.769,
      velocity: 44.334,
    },
    {
      time: '23:52:17.003',
      pilotId: '038',
      pilotName: 'F.MASS',
      lap: 4,
      lapTime: 62.787,
      velocity: 44.321,
    },
  ],
  [
    {
      time: '23:49:10.858',
      pilotId: '033',
      pilotName: 'R.BARRICHELLO',
      lap: 1,
      lapTime: 64.352,
      velocity: 43.243,
    },
    {
      time: '23:50:14.860',
      pilotId: '033',
      pilotName: 'R.BARRICHELLO',
      lap: 2,
      lapTime: 64.002,
      velocity: 43.48,
    },
    {
      time: '23:51:18.576',
      pilotId: '033',
      pilotName: 'R.BARRICHELLO',
      lap: 3,
      lapTime: 63.716,
      velocity: 43.675,
    },
    {
      time: '23:52:22.586',
      pilotId: '033',
      pilotName: 'R.BARRICHELLO',
      lap: 4,
      lapTime: 64.01,
      velocity: 43.474,
    },
  ],
];
module.exports = {
  lapsString,
  resultLaps,
  laps,
  bestLap,
  sortedResults,
  groupedLapsByPilot,
};
