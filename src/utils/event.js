export default class Event {
  constructor (sender) {
    this._sender = sender
    this._listeners = []
  }

  attach (callback) {
    this._listeners.push(callback)
  }

  notify (args) {
    this._listeners.map(l => l(this._sender, args))
  }
}
