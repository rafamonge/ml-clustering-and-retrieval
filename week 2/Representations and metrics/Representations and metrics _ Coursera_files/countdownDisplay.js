define("bundles/videojs/plugins/countdownDisplay",["require","exports","module","videojs","moment"],function(require,exports,module){"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var n=function(){function defineProperties(o,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(o,t.key,t)}}return function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t}}(),t=function get(t,n,o){null===t&&(t=Function.prototype);var e=Object.getOwnPropertyDescriptor(t,n);if(void 0===e){var r=Object.getPrototypeOf(t);return null===r?void 0:get(r,n,o)}if("value"in e)return e.value;var i=e.get;if(void 0===i)return void 0;return i.call(o)},e=require("videojs"),o=require("moment"),r=function(e){function CountdownDisplay(e,n){_classCallCheck(this,CountdownDisplay);var t=_possibleConstructorReturn(this,Object.getPrototypeOf(CountdownDisplay).call(this,e,n));return t.on(e,"timeupdate",t.updateContent),t.on(e,"durationchange",t.updateContent),t}return _inherits(CountdownDisplay,e),n(CountdownDisplay,[{key:"createEl",value:function createEl(){var e=t(Object.getPrototypeOf(CountdownDisplay.prototype),"createEl",this).call(this,"div",{className:"vjs-countdown-time vjs-time-controls vjs-control"});return this.contentEl_=t(Object.getPrototypeOf(CountdownDisplay.prototype),"createEl",this).call(this,"div",{className:"vjs-countdown-time-display",innerHTML:'<span class="vjs-control-text">Current Time </span><em class="cif-spin cif-refresh"></em>',"aria-live":"off"}),e.appendChild(this.contentEl_),e}},{key:"updateContent",value:function updateContent(){var t=this.player().duration()-this.player().currentTime();this.contentEl_.innerHTML='<span class="vjs-control-text">'+this.localize("Time Left")+"</span> "+o.utc(1e3*t).format("m:ss")}}]),CountdownDisplay}(e.getComponent("Component"));e.registerComponent("CountdownDisplay",r)});