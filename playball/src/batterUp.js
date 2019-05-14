import React from 'react'


class AtBat extends React.Component {
  state = {
    strikeCount: 0,
    ballCount: 0
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
    if (foul == 2) {
      this.setState({
        strikeCount: foul
      })
    }
    else {
      foul++ 
      this.setState({
        strikeCount: foul
      })
    }
  }

  hit = (hit) => {
    hit = 0
    this.setState({
      strikeCount: hit,
      ballCount: hit
    })
  }
}

export default AtBat