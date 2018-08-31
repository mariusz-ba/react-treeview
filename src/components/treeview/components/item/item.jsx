import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './item.scss';

import Icon from '../icon/icon';
import List from '../list/list';

export default class Item extends Component {
  state = {
    expanded: false
  }

  onClick = e => {
    if(this.isExpandable())
      this.setState({ expanded: !this.state.expanded });

    if(this.props.onClick)
      this.props.onClick(e);
  }

  isExpandable() {
    const { children } = this.props;

    if(Array.isArray(children) && children.filter(child => child.type === List).length > 0)
      return true;
    return false;
  }

  render() {
    const { children } = this.props;
    let title, list;

    if(Array.isArray(children)) {
      title = children.filter(child => typeof child === 'string');
      list = children.filter(child => child.type === List);
    } else {
      title = children;
      list = undefined;
    }

    const itemClass = classnames(styles.item, {
      [styles['item--expandable']]: list !== undefined,
      [styles['item--expanded']]: this.state.expanded
    })

    return (
      <li className={itemClass}>
        <div 
          className={styles.item__content} 
          onClick={this.onClick}>
          { list !== undefined &&
            <Icon type="angle-arrow-right" size=".5rem"/>
          }
          { title }
        </div>
        { list && list }
      </li>
    )
  }
}