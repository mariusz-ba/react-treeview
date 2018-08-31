import React, { Component } from 'react';
import styles from './list.scss';

export class List extends Component {
  componentDidMount() {
    if(this.ul) {
      const itemHeight = [...this.ul.querySelectorAll('div')].reduce((total, element) => total + element.scrollHeight, 0);
      this.ul.style.setProperty('--max-height', itemHeight + 'px');
      this.ul.style.setProperty('--duration', itemHeight / 1000 + 's');
    }
  }

  render() {
    return (
      <ul className={styles.list} ref={node => this.ul = node}>{ this.props.children }</ul>
    )
  }
}

export default List;