import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {subsribedStatus: true}

  isSubscribed = () => {
    const {subsribedStatus} = this.state
    this.setState({subsribedStatus: !subsribedStatus})
  }

  render() {
    const {subsribedStatus} = this.state

    return (
      <div className="bg">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <div>
          {subsribedStatus ? (
            <button type="button" onClick={this.isSubscribed}>
              Subscribe
            </button>
          ) : (
            <button type="button" onClick={this.isSubscribed}>
              Subscribed
            </button>
          )}
        </div>
      </div>
    )
  }
}
export default Welcome
