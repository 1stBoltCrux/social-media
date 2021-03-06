import React, {Component} from 'react';
import Suggestion from './Suggestion.js'

const suggestionArray = [
  {
    name: 'Brad',
    description: 'An ok friend.'
  },
  {
    name: 'Dave',
    description: 'Friend of the century.'
  },
  {
    name: 'Brendan',
    description: 'A jealous and terrible friend.'
  }
];

function SuggestionList(){
  return(
    <div className='suggestionlist-wrapper'>
      <div className='suggestionlist-top'>
        <h3>Suggestion List</h3>
      </div>

      {suggestionArray.map((suggestion) =>
        <Suggestion
          name={suggestion.name}
          description={suggestion.description}/>
      )}

    </div>
  );
}

export default SuggestionList;
