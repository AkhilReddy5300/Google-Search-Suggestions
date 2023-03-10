// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, displayInput} = props
  const {id, suggestion} = suggestionsList

  const displayBtn = () => {
    displayInput(id)
  }

  return (
    <li className="lists">
      <p className="para">{suggestion}</p>
      <button type="button" className="button" onClick={displayBtn}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
