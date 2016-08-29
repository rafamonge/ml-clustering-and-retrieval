define("bundles/videojs/plugins/autoplayMenuSection",["require","exports","module","jquery","videojs","bundles/videojs/layout/autoplayMenuSection.html"],function(require,exports,module){"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var e=function(){function defineProperties(n,o){for(var e=0;e<o.length;e++){var t=o[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(t,e,o){return e&&defineProperties(t.prototype,e),o&&defineProperties(t,o),t}}(),$=require("jquery"),t=require("videojs"),o=require("bundles/videojs/layout/autoplayMenuSection.html"),n=function(t){function AutoplayMenuSection(e,o){_classCallCheck(this,AutoplayMenuSection);var t=_possibleConstructorReturn(this,Object.getPrototypeOf(AutoplayMenuSection).call(this,e,o));return $(t.el_).find('[data-js="autoplay-off-button"]').click(t.onAutoplayOff.bind(t)),$(t.el_).find('[data-js="autoplay-on-button"]').click(t.onAutoplayOn.bind(t)),e.autoplay()?$(t.el_).find('[data-js="autoplay-on-button"]').addClass("selected"):$(t.el_).find('[data-js="autoplay-off-button"]').addClass("selected"),t}return _inherits(AutoplayMenuSection,t),e(AutoplayMenuSection,[{key:"createEl",value:function createEl(t,e){return $(o())[0]}},{key:"onAutoplayOff",value:function onAutoplayOff(t,e){$(this.el_).find('[data-js="autoplay-off-button"]').addClass("selected"),$(this.el_).find('[data-js="autoplay-on-button"]').removeClass("selected"),this.player_.autoplay(!1),this.player_.trigger("autoplaychange")}},{key:"onAutoplayOn",value:function onAutoplayOn(t,e){$(this.el_).find('[data-js="autoplay-off-button"]').removeClass("selected"),$(this.el_).find('[data-js="autoplay-on-button"]').addClass("selected"),this.player_.autoplay(!0),this.player_.trigger("autoplaychange")}}]),AutoplayMenuSection}(t.getComponent("Component"));t.registerComponent("AutoplayMenuSection",n)});