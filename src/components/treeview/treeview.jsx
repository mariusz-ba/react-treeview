// Dependencies
import React, { Component } from 'react';

// Components
import Item from './components/item/item';
import List from './components/list/list';
import Icon from './components/icon/icon';

export default class TreeView extends Component {
  static Item = Item;
  static List = List;
  static Icon = Icon;
  
  renderChildren() {
    const { children } = this.props;

    if(typeof children === 'object' && Array.isArray(children)) 
      return children.filter(child => child.type === List);

    if(typeof children === 'object' && children.type === List) 
      return children;

    return null;
  }

  render() {
    return (
      <div>
        { this.renderChildren() }
      </div>
    )
  }
}