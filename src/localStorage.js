define([
    "skylark-langx/langx",
    "./storages"
], function(langx,storages) {

    var storage  = null;

    try {
        storage = window["localStorage"];
    } catch (e){

    }

    function localStorage() {
        return localStorage;
    }

    langx.mixin(localStorage, {
        isSupported : function() {
            return !!storage;
        },

        set : function(key, val) {
            if (val === undefined) { 
                return this.remove(key) 
            }
            storage.setItem(key, langx.serializeValue(val));
            return val
        },

        get : function(key, defaultVal) {
            var val = langx.deserializeValue(storage.getItem(key))
            return (val === undefined ? defaultVal : val)
        },

        remove : function(key) { 
            storage.removeItem(key) 
        },

        clear : function() { 
            storage.clear() 
        },

        list : function() {
            var vaules = {}
            for (var i=0; i<storage.length; i++) {
                vaules[key] = storage.key(i)
            }

            return values;
        }
    });

    return  storages.localStorage = localStorage;

});

