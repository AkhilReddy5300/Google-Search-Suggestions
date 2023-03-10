// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  displayInput = id => {
    const {searchInput} = this.state
    let suggestionText
    switch (id) {
      case 1:
        suggestionText = 'Price of Ethereum'
        break
      case 2:
        suggestionText = 'Oculus Quest 2 specs'
        break
      case 3:
        suggestionText = 'Tesla Share Price'
        break
      case 4:
        suggestionText = 'Price of Ethereum today'
        break
      case 5:
        suggestionText = 'Latest trends in AI'
        break
      case 6:
        suggestionText = 'Latest trends in ML'
        break
      default:
        break
    }
    this.setState(prevState => ({searchInput: suggestionText}))
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const filterItems = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google"
        />
        <div className="card">
          <div className="searchCont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search"
            />
            <input
              type="search"
              className="inputEl"
              placeholder="Search Google"
              value={searchInput}
              onChange={this.onChangeInput}
            />
          </div>
          <ul>
            {filterItems.map(each => (
              <SuggestionItem
                key={each.id}
                suggestionsList={each}
                displayInput={this.displayInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
