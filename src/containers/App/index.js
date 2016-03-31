import React, { PropTypes } from 'react';

import styles from './styles.css' 

/**
 * App component
 */
export default function App ({ children }) {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.element,
}
