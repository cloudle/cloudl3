@Wings = { version: '2.0.1', Dispatcher: MeteorFlux.Dispatcher }; @Model = {}

@Module = (namespace, specifications) ->
  namespace = generateNamespace(namespace)
  namespace.parent[namespace.node][key] = value for key, value of specifications

@classNames = (source) -> result = ""; result += "#{key} " for key, val of source when val; result

generateNamespace = (namespace) ->
  currentNamespace = @
  namespaceParts = namespace.split(".")
  for part in namespaceParts
    previousNamespace = currentNamespace; lastPart = part
    currentNamespace[part] = {} if !currentNamespace[part]
    currentNamespace = currentNamespace[part]
  return { parent: previousNamespace, node: lastPart }