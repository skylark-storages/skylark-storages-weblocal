/**
 * skylark-utils-storage - The skylarkjs storage utility library.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["skylark-langx/langx","./storages"],function(e,n){var t=null;try{t=window.sessiionStorage}catch(e){}return e.mixin(function e(){return e},{isSupported:function(){return!!t},set:function(n,r){return void 0===r?this.remove(n):(t.setItem(n,e.serializeValue(r)),r)},get:function(n,r){var i=e.deserializeValue(t.getItem(n));return void 0===i?r:i},remove:function(e){t.removeItem(e)},clear:function(){t.clear()},list:function(){for(var e={},n=0;n<t.length;n++)e[key]=t.key(n);return values}}),n.sessionStorage=sessionStorage});
//# sourceMappingURL=sourcemaps/sessionStorage.js.map
