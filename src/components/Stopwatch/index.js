// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timerSeconds: 0}

  startTimerCountDown = () => {
    this.setState(preState => ({
      timerSeconds: preState.timerSeconds + 1,
    }))
  }

  startTimer = () => {
    this.intervalId = setInterval(() => {
      this.startTimerCountDown()
    }, 1000)
  }

  stopTimer = () => {
    clearInterval(this.intervalId)
  }

  resetTimer = () => {
    clearInterval(this.intervalId)
    this.setState({
      timerSeconds: 0,
    })
  }

  convertTimeToTimerFormat = () => {
    const {timerSeconds} = this.state
    const minutes = Math.floor(timerSeconds / 60)
    const seconds = Math.floor(timerSeconds % 60)
    const minutesInStringFormat = minutes > 9 ? minutes : `0${minutes}`
    const secondsInStringFormat = seconds > 9 ? seconds : `0${seconds}`
    return `${minutesInStringFormat}:${secondsInStringFormat}`
  }

  render() {
    return (
      <div className="app-bg-container">
        <div className="app-container">
          <h1 className="header-heading">Stopwatch</h1>
          <div className="stopwatch-container">
            <div className="timer-header">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="timer-heading">Timer</p>
            </div>
            <h1>{this.convertTimeToTimerFormat()}</h1>
            <div className="btn-container">
              <button
                type="button"
                className="start-btn"
                onClick={this.startTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-btn"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-btn"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
