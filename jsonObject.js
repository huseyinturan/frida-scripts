    
'use strict';
import ('./util.js');

setImmediate(function() {  
    console.log("[*] Starting script to Json");
      
    Java.perform(function () {       
        var obj = Java.use("org.json.JSONObject");
            
        obj.$init.overload('org.json.JSONTokener').implementation = function() {
            send("string('org.json.JSONTokener') got called");
                
             var info = arguments[0].toString();
            if (info) {
                console.log(info);
            }

            return this.$init(arguments[0]);
        };

        obj.$init.overload('java.lang.String').implementation = function() {
            send("string('java.lang.String') got called");
                
            var info = this.$init(arguments[0]).toString();
           if (info) {
                console.log(info);

            }

            return this.$init(arguments[0]);
        };

        obj.$init.overload('java.util.Map').implementation = function() {
            send("string('java.util.Map') got called");
                
            var info = this.$init(arguments[0]).toString();
            if (info) {
                console.log(info);
            }

            return this.$init(arguments[0]);
        };

        obj.$init.overload('org.json.JSONObject', '[Ljava.lang.String;').implementation = function() {
           send("string('org.json.JSONObject', '[Ljava.lang.String;') got called");
                
            var info = this.$init(arguments[0], arguments[1]).toString();
            if (info) {
                console.log(info);
            }

            return this.$init(arguments[0], arguments[1]);
        };

    });
});