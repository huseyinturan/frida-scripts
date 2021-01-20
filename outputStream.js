setImmediate(function() {
    console.log("[*] Starting script");
    Java.perform(function() {
     var bClass = Java.use("java.io.OutputStream");
	  bClass.write.overload('int').implementation = function(x) { 
         console.log("[*] rS print data int "+x);
      }
	  bClass.write.overload('[B').implementation = function(x) { 
         //console.log("[*] rS print data array "+x); //Working

         var buffer = Java.array('byte', x);
        var result = "";
        for(var i = 0; i < buffer.length; ++i){
           result += (String.fromCharCode(buffer[i] & 0xff)); // here!!
          }
        console.log(result);
      }
	     bClass.write.overload('[B','int','int').implementation = function(b,y,z) { 
         console.log("[*] rS print data otvet "+b);
      }
      console.log("[*]  Running sniffer")

    })
})