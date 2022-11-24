// Write your code here
import './index.css'
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props

    const searchResults = destinationsList.filter(item =>
      item.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="mainBgContainer">
        <h1 className="heading">Destination Search</h1>
        <div className="inputContainer">
          <input
            type="search"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />

          <img
            className="search-image"
            alt="search icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
          />
        </div>

        <ul className="ulList-item">
          {searchResults.map(each => (
            <DestinationItem listItems={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
