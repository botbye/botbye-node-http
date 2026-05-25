"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factory = exports.dev = exports.evaluate = exports.init = void 0;
var node_core_1 = require("@botbye/node-core");
var node_http_client_1 = require("@botbye/node-core/node-http-client");
var constants_1 = require("./constants");
var factory = function () { return (0, node_core_1.moduleApiFactory)({
    httpClient: node_http_client_1.nodeHttpClient,
    module: {
        name: constants_1.MODULE_NAME,
        version: constants_1.MODULE_VERSION,
    },
    requestInfoExtractor: function (requestObject, global) {
        var _a;
        try {
            return ({
                ip: (_a = (0, node_core_1.getIpFromHeaders)(requestObject.headers)) !== null && _a !== void 0 ? _a : requestObject.socket.remoteAddress,
                requestUri: requestObject.url,
                requestMethod: requestObject.method,
                headers: requestObject.headers,
            });
        }
        catch (_b) {
            global.logger.warn("Not valid type of request passed. event.request.request should be instance of http.IncomingMessage. Fallback value will be used");
            return ({
                ip: "0.0.0.0",
                headers: {},
            });
        }
    },
}); };
exports.factory = factory;
var _a = factory(), init = _a.init, evaluate = _a.evaluate, dev = _a.dev;
exports.init = init;
exports.evaluate = evaluate;
exports.dev = dev;
