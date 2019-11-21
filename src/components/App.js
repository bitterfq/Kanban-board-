import React, { Component } from "react";
import Column from "./Column";
import {connect} from "react-redux";

class App extends Component {
  render () {
    const {lists} = this.props;
    return (
      <div className = "App">
        <div style= {styles.listsContainer}>
            {lists.map(list => (
              <Column title = {list.title}
              cards = {list.cards}  />
          )) }
      </div>
    </div>
  );
  }
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row",
    marginRight: 8
  }
};

const mapStateToProps = state => ({
    lists: state.lists
});

export default connect(mapStateToProps) (App);
