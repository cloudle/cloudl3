actions = Wings.keyMirror 'EPISODE',
  CREATE: null, DESTROY: null, UPDATE: null

Module 'App.Episode',
  actionTypes: actions
  Actions:
    create: (options) -> App.dispatch actions.CREATE, options: options
    update: (id, options) -> App.dispatch actions.UPDATE, {id: id, options: options}
    destroy: (id) -> App.dispatch actions.DESTROY, id: id