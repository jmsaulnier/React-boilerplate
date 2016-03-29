import React, { Component } from 'react';

import styles from './styles.css' 

/**
 * App component
 */
export default class App extends Component {

  constructor(props) {

    super(props);

  }

  /**
   * componentDidMount
   */

  componentDidMount() {


  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {

    return (
      <div>
        YO <img className={styles.wrapper} src="assets/images/yeoman.png" />
      </div>
    );
  }
}
