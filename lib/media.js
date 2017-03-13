'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Rich media like an image or video
 * @class
 * @property {string} url - URL to the media file
 * @memberof templates:components
 **/
var Media = function Media(url) {
  _classCallCheck(this, Media);

  if (typeof url !== 'string' || url.length === 0) {
    throw new Error('url is mandatory ' + url);
  }
  this.url = url;
};

exports.default = Media;