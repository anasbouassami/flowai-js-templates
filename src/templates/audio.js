import Template from './template'
import Action from '../components/action'

/**
 * Template with audio
 * @property {string} title - Describes the audio
 * @property {string} url - URL to the audio file
 * @property {Action} action - Optional Action
 * @example
 * const audio = new Audio({
 *   title: "Awesome title",
 *   url: "https://...",
 *   action: new Action({
 *     type: 'url',
 *     value: 'https://...'
 *   })
 * })
 **/
class Audio extends Template {

  /**
   * @param {string} opts.title - Required
   * @param {string} opts.url - Required
   * @param {string} opts.action - Optional
   **/
  constructor( { title, url, action }) {
    super()

    if(typeof title !== 'string' || !title.length) {
      throw new Error('Audio title is mandatory')
    }

    this.title = title

    if(typeof url !== 'string' || !url.length) {
      throw new Error('Audio url is mandatory')
    }

    this.url = url

    this.action = action || undefined
  }

  set action(action) {
    if(action && !(action instanceof Action)) {
      throw new Error('Audio action must be an instance of Action')
    }

    this._action = action
  }

  get action() {
    return this._action
  }

  toJSON() {
    const {
      title,
      url,
      action,
      quickReplies,
      delay,
      fallback
    } = this

    return {
      type: 'audio',
      payload: {
        title,
        url,
        action,
        quickReplies
      },
      delay,
      fallback
    }
  }
}

export default Audio
