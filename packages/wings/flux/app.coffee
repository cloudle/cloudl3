@App =
  Dispatcher: new Wings.Dispatcher()
  dispatch: (actionType, params) ->
    fullParams = Wings.merges({actionType: actionType}, params)
    @Dispatcher.dispatch(fullParams)