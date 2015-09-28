Home = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {episodes: Episode.find().fetch()}
  },

  renderEpisodes() {
    return this.data.episodes.map((ep) => {
      return <div key={ep._id}>{ep.name}</div>;
    });
  },

  render() {
    return (
      <div className="container">
        <h1>Welcome to React!</h1>
        {renderEpisodes()}
      </div>
    )
  }
});