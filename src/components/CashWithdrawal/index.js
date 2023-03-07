import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    amount: 2000,
  }

  withdrawAmount = id => {
    if (id === 1) {
      this.setState(prevState => ({amount: prevState - 50}))
    } else if (id === 2) {
      this.setState(prevState => ({amount: prevState - 100}))
    } else if (id === 3) {
      this.setState(prevState => ({amount: prevState - 200}))
    } else {
      this.setState(prevState => ({amount: prevState - 500}))
    }
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-cont">
        <div className="cash-withdraw-cont">
          <div className="name">
            <div className="name-cont">
              <h1 className="letter">S</h1>
            </div>
            <h1 className="full-name">Sriram S U</h1>
          </div>
          <div className="balance-counter">
            <p className="text">Your Balance</p>
            <div>
              <p className="amount">{amount}</p>
              <p className="word">in Rupees</p>
            </div>
          </div>
          <p className="sub-heading">Withdraw</p>
          <p className="caption">CHOOSE SUM (IN RUPEES)</p>
          <ul className="buttons-list-cont">
            {denominationsList.map(each => (
              <DenominationItem eachDetails={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
