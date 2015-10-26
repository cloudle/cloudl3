actions = App.Episode.actionTypes

Module 'App.EpisodeStore',
  getAll: -> Episode.find().fetch()

App.Dispatcher.register (action) ->
  if action.actionType is actions.CREATE
    Episode.insert action.options
  else if action.actionType is actions.UPDATE
    Episode.update action.id, action.options
  else if action.actionType is actions.DESTROY
    destroy(action.id)