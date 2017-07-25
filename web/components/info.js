import React from 'react';
import { connect } from 'react-redux';
import loadInfo from '../actions/action'

// @connect(state => ({
//     info: state.info
// }))

class Info extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(loadInfo());
    }

  render() {
    const { loading, info, errors } = this.props.info;

    if (loadind) { return (<div>Loading</div>) }
    if (errors != null) { return (<div>Error!</div>) }
    return (
      <div>
        { info }
      </div>
    );
  }
}
function mapStateToProps (state) {
  return {
    info: state.info
  }
}

export default connect(mapStateToProps)(Info);