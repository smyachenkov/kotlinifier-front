import './App.css';
import React, { PureComponent } from "react";
import ReactDOM from 'react-dom';
import SuggestionList from "./SuggestionList";
import Links from "./Links";
import ReactGA from 'react-ga';
import ktMeme from './kotlin_meme.png';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { 
      suggestions: [],
      input: "",
      isLoading: false,
      error: null
    };
  }


  inputHandler = (event) => {
    this.setState(
        {input: event.target.value}
      );
  }

  componentDidMount() {
    ReactGA.initialize('G-P7KWTYJJNV');
    this.fetchSuggestions()
  }

  fetchSuggestions() {
    this.setState({ isLoading: true });
    fetch("https://ttbzcunqd9.execute-api.us-east-1.amazonaws.com/kotlinifyProjectName")
        .then(response => response.json())
        .then(data => this.setState({ suggestions: data.names, isLoading: false }))
        .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { suggestions, isLoading } = this.state;
    if (isLoading) {
      return <form class="form-inline">
        <section>
          <div class="wait-message">
            <h2>Need a name for your next Kotlin project?</h2>
            <h4>Hang on a second, we will find you a great one!</h4>
          </div>
          <img class="meme" src={ktMeme}></img>
          <Links /> 
        </section>
      </form>
    }
    return (
      <form class="form-inline">
        <section>
          <div>
            <div>
              <h2>Need a name for your next Kotlin project?</h2>
              <h4>Try one of these:</h4>
            </div>
            <SuggestionList suggestions={suggestions} /> 
            <button class="button" id="give-me-more-button" onClick={() => this.fetchSuggestions()}>
              <a href="#">Give me more!</a>
            </button>
          </div>
          <Links /> 
          <img class="meme" src={ktMeme}></img>
        </section>
      </form>
    );
  }
}