Home = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {}
  },
  render() {
    return (
      <div className="container">
        <h1>Welcome to React!</h1>
      </div>
    )
  }
});