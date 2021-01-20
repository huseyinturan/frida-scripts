'use strict';

console.log("Waiting for Java..");

Java.perform(function (){
  var Log = Java.use("android.util.Log");
  Log.v("frida-lief", "Have fun!");

  Log.d.overload("java.lang.String", "java.lang.String").implementation = function (a, b) {
       send("Log.d()");
       send(a.toString());
       send(b.toString());
       return this.d.overload("java.lang.String", "java.lang.String").call(this, a, b);
   };

   Log.d.overload("java.lang.String", "java.lang.String", "java.lang.Throwable").implementation = function (a, b, c) {

       send("Log.d()");
       send(a.toString());
       send(b.toString());
       return this.d.overload("java.lang.String", "java.lang.String", "java.lang.Throwable").call(this, a, b, c);
   };
});