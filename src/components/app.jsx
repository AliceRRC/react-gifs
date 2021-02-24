import React, { Component } from 'react';
// eslint-disable-next-line import/extensions
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    const gifs = [
      {id: "B1aOlXWCIUYjS"},
      {id: "iMYbnEuQ36GezAw9nF"}
    ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
            <div className="selected-gif">
            <Gif id="iMYbnEuQ36GezAw9nF"/>
            </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
      // eslint-disable-next-line indent
      );
  }
}

export default App;
