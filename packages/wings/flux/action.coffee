@Module 'Wings',
  keyMirror: (prefix, source) -> (fullKey="#{prefix}_#{key}"; source[fullKey] = fullKey) for key of source; source
  merges: (source, exts...) -> source[key] = val for key, val of ext for ext in exts; source
  createActions: (actions) -> console.log 'creating action ', actions