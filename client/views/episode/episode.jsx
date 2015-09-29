Episodes = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData: function() {
    return {
      episodes: EpisodeCollection.find({}).fetch()
    };
  },
  getInitialState: function() {
    return {};
  },
  addEpisode: function(e) {
    e.preventDefault();
    var episode = React.findDOMNode(this.refs.input).value;

    EpisodeCollection.insert({name: episode});
    React.findDOMNode(this.refs.input).value = "";
  },
  render: function () {
    return (
      <div>
        <ul>
          {this.data.episodes.map(function (episode) {
            return <li key={episode._id}>{episode.name}</li>;
          })}
        </ul>
        <form onSubmit={this.addEpisode}>
          <input type="text" ref="input"/>
          <button type="submit">Add Episode</button>
        </form>
      </div>
    );
  }
});