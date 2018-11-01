import axios from 'axios'
import React from 'react';
import Account from './Account'
import Footer from './Footer'
import Header from './Header'
import Subscriptions from './Subscriptions'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      data: {},
      isReady: false,
      firstName: ''
    }
  }

  componentDidMount() {
    axios.get('./assets/data/account.json')
      .then(response => {
          const date = new Date(localStorage.createdAt || response.data.created_at).toISOString().slice(0, 10);
          this.setState({
          firstName: localStorage.firstName || response.data.user_firstname,
          lastName: localStorage.lastName || response.data.user_lastname,
          company: localStorage.company || response.data.company,
          email: localStorage.email || response.data.user_email,
          phoneNumber: localStorage.phoneNumber || response.data.user_phonenumber,
          role: localStorage.role || response.data.role,
          createdAt: date,
          data: response.data,
          isReady: true,
          subscriptions: response.data.subscriptions
        })
      })
      .catch(err => {
        this.setState({ isReady: true })
        console.log(err)
      })
  }

  /**
   * set state with new updates
   * @private
   **/
  _onUpdate = newState => {
    this.setState(newState)
  }

  render() {
    const { isReady, firstName, lastName, email, phoneNumber, company, role, createdAt, subscriptions } = this.state
    return (
      <div className="app">
        <Header name={firstName}/>
        <div className="app__body">
          {isReady && <Account
            firstName={firstName}
            lastName={lastName}
            email={email}
            phoneNumber={phoneNumber}
            company={company}
            role={role}
            createdAt={createdAt}
            onUpdate={this._onUpdate}
          >
            <Subscriptions industry={subscriptions.subscription.industry} plan={subscriptions.subscription.plan} />
          </Account>}
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
