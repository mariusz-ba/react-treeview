import React, { Component } from 'react';
import TreeView from './components/treeview/treeview';
import './app.scss';

export class App extends Component {
  onClicked = (e) => {

  }

  render() {
    return (
      <div>
        <TreeView>
          <TreeView.List>
            <TreeView.Item onClick={this.onClicked}>Item</TreeView.Item>
            <TreeView.Item onClick={this.onClicked}>Item</TreeView.Item>  
            <TreeView.Item>Item
              <TreeView.List>
                <TreeView.Item onClick={this.onClicked}>Subitem</TreeView.Item>
                <TreeView.Item onClick={this.onClicked}>Subitem</TreeView.Item>
                <TreeView.Item onClick={this.onClicked}>Subitem</TreeView.Item>
              </TreeView.List>
            </TreeView.Item>
            <TreeView.Item>Item
              <TreeView.List>
                <TreeView.Item onClick={this.onClicked}>Subitem</TreeView.Item>
                <TreeView.Item onClick={this.onClicked}>Subitem</TreeView.Item>
                <TreeView.Item>Subitem
                  <TreeView.List>
                    <TreeView.Item onClick={this.onClicked}>Sub-Subitem</TreeView.Item>
                    <TreeView.Item onClick={this.onClicked}>Sub-Subitem</TreeView.Item>
                    <TreeView.Item onClick={this.onClicked}>Sub-Subitem</TreeView.Item>
                  </TreeView.List>
                </TreeView.Item>
              </TreeView.List>
            </TreeView.Item>
          </TreeView.List>
        </TreeView>
      </div>
    )
  }
}

export default App;