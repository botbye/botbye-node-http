"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = init;
exports.validateRequest = validateRequest;
var botbye_node_core_1 = require("botbye-node-core");
(0, botbye_node_core_1.initPackageInfo)({ name: "NODE_HTTP", version: "1.0.6" });
function init(options) {
    (0, botbye_node_core_1.init)(options);
    return validateRequest;
}
function validateRequest(options) {
    var token = options.token, request = options.request, customFields = options.customFields;
    var headers = request.headers;
    var requestInfo = {
        request_uri: request.url || "",
        request_method: request.method || "",
        remote_addr: request.socket.remoteAddress || "",
    };
    return (0, botbye_node_core_1.validateRequest)({
        token: token,
        headers: headers,
        requestInfo: requestInfo,
        customFields: customFields,
    });
}
