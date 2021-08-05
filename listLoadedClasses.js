setImmediate(function() {   
    console.log("[*] Starting script to listLoadedClasses");
   
    Java.perform(function() {
        Java.enumerateLoadedClasses({
            onMatch: function(className) {
                var a = String(className);
                if(a.includes("tencent"))
                    console.log(className)
            },
            onComplete: function() {}
        });
    });
});
