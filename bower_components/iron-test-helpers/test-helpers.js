!function(e){"use strict";e.flushAsynchronousOperations=function(){Polymer.dom.flush(),window.CustomElements&&window.CustomElements.takeRecords()},e.forceXIfStamp=function(n){for(var s,t=Polymer.dom(n.root).querySelectorAll("template[is=dom-if]"),o=0;s=t[o];o++)s.render();e.flushAsynchronousOperations()},e.fireEvent=function(e,n,s){var t=new CustomEvent(e,{bubbles:!0,cancelable:!0});for(var o in n)t[o]=n[o];s.dispatchEvent(t)},e.skipUnless=function(e,n){var s=!!n.length;return function(t){if(!e())return t();var o=n.call(this,t);return s||t(),o}},e.TestHelpers={flushAsynchronousOperations:e.flushAsynchronousOperations,forceXIfStamp:e.forceXIfStamp,fireEvent:e.fireEvent,skipUnless:e.skipUnless}}(this);