import React, { Component } from 'react';
// eslint-disable-next-line import/extensions
import giphy from 'giphy-api';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGitId: "iMYbnEuQ36GezAw9nF"
    }
    this.search("Homer thinking");
  }

  search = (query) => {
    giphy('CmgyM28YKlb3fBngOVotHHRXiPQVkrbF').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
      gifs: result.data
      });
    });
  }

  render() {
    const gifs = [
      {id: "B1aOlXWCIUYjS"},
      {id: "iMYbnEuQ36GezAw9nF"}
    ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
            <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
            </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
      // eslint-disable-next-line indent
      );
  }
}

export default App;
