if (Meteor.isClient) {
  Meteor.startup(function() {
    React.render(<App />, document.getElementById("react-root-node"));
  });
}