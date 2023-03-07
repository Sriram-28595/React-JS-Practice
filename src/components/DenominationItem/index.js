import './index.css'

const DenominationItem = props => {
  const {eachDetails, withdrawAmount} = props
  const {id, value} = eachDetails

  const onWithdrawal = () => {
    withdrawAmount(id)
  }

  return (
    <li className="button-cont">
      <button type="button" className="button" onClick={onWithdrawal}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
