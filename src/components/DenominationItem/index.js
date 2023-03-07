import './index.css'

const DenominationItem = props => {
  const {eachDetails} = props
  const {id, value} = eachDetails

  const onWithdrawal = () => {
    withdrawAmount(id)
  }

  return (
    <li>
      <button type="button" className="button" onClick={onWithdrawal}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
