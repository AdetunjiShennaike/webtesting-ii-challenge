import React from 'react'


class AtBat extends React.Component {
  state = {
    strikeCount: 0,
    ballCount: 0,
    score: 0
  }

  strike = (strike) => {
    strike++
    if (strike == 3) {
      strike = 0
      this.setState({
        strikeCount: strike,
        ballCount: strike
      })
    }
    else {
      this.setState({
        strikeCount: strike
      })
    }
  }

  ball = (ball) => {
    ball++
    if (ball == 4) {
      ball = 0 
      this.setState({ 
        ballCount: ball,
        strikeCount: ball
      })
    }
    else {
      this.setState({
        ballCount:ball
      })
    }
  }

  foul = (foul) => {
    foul++ 
    if (foul >= 2) {
      foul = 2
      this.setState({
        strikeCount: foul
      })
    }
    else {
      this.setState({
        strikeCount: foul
      })
    }
  }

  hit = (hit) => {
    hit = 0
    const newScore = this.state.score++
    this.setState({
      strikeCount: hit,
      ballCount: hit,
      score: newScore
    })
  }
  render(){
    return(
      <div>
        <div className='display'>
          <p>Score {this.state.score}</p>
          <p>Strike {this.state.strikeCount}</p>
          <p>Ball {this.state.ballCount}</p>
        </div>
        <div className='buttons'>
          <button onClick={this.strike(this.state.strikeCount)}>Strike</button>
          <button onClick={this.ball(this.state.ballCount)}>Ball</button>
          <button onClick={this.foul(this.state.strikeCount)}>Foul</button>
          <button onClick={this.hit(this.state.score)}>Hit</button>
        </div>
      </div>
    )
  }
}

export default AtBat