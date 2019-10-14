module.exports = class Lap {
  constructor(lapInformation) {
    const [time, pilotId, pilotName, lap, lapTime, velocity] = lapInformation;

    this.time = time;
    this.pilotId = pilotId;
    this.pilotName = pilotName;
    this.lap = Number(lap);
    this.lapTime = lapTime;
    this.velocity = Number(velocity.replace(',', '.'));
  }
};
