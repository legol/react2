// @flow
const React = require("react");
const PropTypes = require("prop-types");

const axios = require("axios");

type Props = { url: string };
type State = {
  data?: string,
  loading: boolean
};

class TestAsyncServerCall extends React.Component<Props, State> {
  static propTypes = {
    url: PropTypes.string.isRequired
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      data: undefined,
      loading: true
    };
  }

  componentDidMount() {
    let currentComponent = this;
    // Make a request for a user with a given ID
    axios
      .get(this.props.url)
      .then(function(response) {
        // handle success
        console.log("in componentDidMount");
        console.log(response);
        currentComponent.setState({ data: response.data, loading: false });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }

  render(): React.Node {
    if (this.state.loading === true) {
      return <div>loading...</div>;
    }
    return <div>{this.state.data}</div>;
  }
}

export default TestAsyncServerCall;
