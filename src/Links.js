import React, { PureComponent } from "react";
import './Links.css';
import githubLogo from './github_logo.png';

export default class Links extends PureComponent {

  render() {
    return (
      <div class="links">
        <a class="link" href="https://smyachenkov.com/">home</a>
        <a class="link" href="https://github.com/smyachenkov/kotlinifier">
          <img src={githubLogo}></img>
        </a>
      </div>
    );
  }

}
