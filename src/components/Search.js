import React, {PureComponent as Component} from 'react'


// const SERVER_URL = "http://593d3fe7.ngrok.io/secrets.json"

class SearchForm extends Component {

  render() {
    return (
      <div>
      <h4>Search Form coming Soon</h4>
      </div>
    )
  }
}


function Gallery () {
  return (
    <div>
    <h4>Gallery Coming Soon</h4>
    </div>
  )
}


class Search extends Component {


  render() {
    return (
      <div>
        <h2>Search Page under construction...</h2>
        <SearchForm />
        <Gallery />
      </div>
    )
  }
}

export default Search
