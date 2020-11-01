import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import './SuggestionList.css';


export default class SuggestionList extends PureComponent {

  static propTypes = {
    suggestions: PropTypes.array
  };

  render() {
    return (
    	<ul class="suggestion-list">
        	{ this.props.suggestions.map(s => { return <li>{s}</li> })}
        </ul>
    );
  }

}
