import React from 'react'
import { Display } from './dashBoard';


class AtBat extends React.Component {
 
    state = {
      strikeCount: 0,
      ballCount: 0,
      score: 0
    }
  
  
  resetStrike(count) {
    this.setState({
      strikeCount: count
    })
  }
  
  resetBall(count) {
    this.setState({
      ballCount: count
    })
  }
  
  strike = e => {
    e.preventDefault()
    let strike = this.state.strikeCount++
    if (strike == 3) {
      strike = 0
      this.resetBall(strike)
      this.resetStrike(strike)
    }
    else {
      this.setState({
        strikeCount: strike
      })
    }
  }

  ball = e => {
    e.preventDefault()
    let ball = this.state.ballCount++
    if (ball == 4) {
      ball = 0 
      this.resetBall(ball)
      this.resetStrike(ball)
    }
    else {
      this.setState({
        ballCount:ball
      })
    }
  }

  foul = e => {
    e.preventDefault()
    let foul = this.state.strikeCount++ 
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

  hit = e => {
    e.preventDefault()
    const newScore = this.state.score++
    this.resetBall(0)
    this.resetStrike(0)
    this.setState({
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
        <Display 
          hit={this.hit} 
          strike={this.strike} 
          ball={this.ball}
          foul={this.foul}
          score={this.state.score}
          strikeCount={this.state.strikeCount}
          ballCount={this.state.ballCount}
        />
      </div>
    )
  }
}

export default AtBat