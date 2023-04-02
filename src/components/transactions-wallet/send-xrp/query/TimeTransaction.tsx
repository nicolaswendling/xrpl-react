export class TimeTransaction {
  startTime = 0
  endTime = 0

  constructor() {
    this.start()
  }

  start() {
    this.startTime = new Date().getTime()
  }

  end() {
    this.endTime = new Date().getTime()
  }

  elapsedTime() {
    this.end()
    return this.endTime - this.startTime
  }
}
