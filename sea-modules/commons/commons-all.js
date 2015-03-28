define(function (require, exports, module) {
    var _ = require("commons/lodash/3.5.0/lodash");
    window._ = _;
    window._.str = require('commons/underscore-string/underscore.string');
    _.mixin(_.str);

    require('commons/json/1.0.3/json');
    window.moment = require('commons/moment/2.0.0/moment');
    require('commons/qycloud/firebugx');
    window.webhelper = require('commons/qycloud/webhelper');
    window.swfobject = require('commons/swfobject/2.2.0/swfobject');
    module.exports = _;
});

__inline("./lodash/3.5.0/lodash.js");
__inline("./underscore-string/underscore.string.js");
__inline("./json/1.0.3/json.js");
__inline("./moment/2.0.0/moment.js");
__inline("./qycloud/firebugx.js");
__inline("./qycloud/webhelper.js");
__inline("./crypto-sha256/crypto-sha256.js");
__inline("./socket-io-client/socket.io.js");
__inline("./swfobject/2.2.0/swfobject.js");
__inline("./jssha/sha.js");