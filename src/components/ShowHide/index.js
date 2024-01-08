// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstClick: false, isLastClick: false}

  onFirstname = () => {
    this.setState(prevState => ({isFirstClick: !prevState.isFirstClick}))
  }

  onLastname = () => {
    this.setState(prevState => ({isLastClick: !prevState.isLastClick}))
  }

  render() {
    const {isFirstClick, isLastClick} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div>
          <div className="but-para-container">
            <div>
              <button
                type="button"
                className="button"
                onClick={this.onFirstname}
              >
                Show/Hide Firstname
              </button>
              {isFirstClick ? <p className="para">Joe</p> : null}
            </div>
            <div>
              <button
                type="button"
                className="button"
                onClick={this.onLastname}
              >
                Show/Hide Lastname
              </button>
              {isLastClick ? <p className="para">Jonas</p> : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
