var Color = {
    RESET: "\x1b[39;49;00m", Black: "0;01", Blue: "4;01", Cyan: "6;01", Gray: "7;11", Green: "2;01", Purple: "5;01", Red: "1;01", Yellow: "3;01",
    Light: {
        Black: "0;11", Blue: "4;11", Cyan: "6;11", Gray: "7;01", Green: "2;11", Purple: "5;11", Red: "1;11", Yellow: "3;11"
    }
};

function LOG(input, kwargs) {
    kwargs = kwargs || {};
    var logLevel = kwargs['l'] || 'log', colorPrefix = '\x1b[3', colorSuffix = 'm';
    if (typeof input === 'object')
        input = JSON.stringify(input, null, kwargs['i'] ? 2 : null);
    if (kwargs['c'])
        input = colorPrefix + kwargs['c'] + colorSuffix + input + Color.RESET;
    console[logLevel](input);
};

function decodeBase64(data){
    var androidBase64 = Java.use('android.util.Base64');

    var base64 = data.replace("LegyRequestData [byteArray=","").replace("]","");
    var output = androidBase64.decode(base64,0);
    var buffer = Java.array('byte', output);
    var result = "";
    for(var i = 0; i < buffer.length; ++i){
        result += (String.fromCharCode(buffer[i] & 0xff)); // here!!
    }
    return result;
};
