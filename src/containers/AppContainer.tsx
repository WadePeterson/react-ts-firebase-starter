import * as Duckbase from 'duckbase';
import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../reducers';

const mapStateToProps = (state: RootState) => {
  return {
    hasLoaded: Duckbase.currentUserSnapshot(state.firebase).hasLoaded(),
    user: Duckbase.getCurrentUser(state.firebase)
  };
};

type StateProps = ReturnType<typeof mapStateToProps>;

const App = (props: StateProps) => {
  return <div>Hello, {props.user ? props.user.displayName : 'anonymoose.'}</div>;
};

export default connect(mapStateToProps)(App);
