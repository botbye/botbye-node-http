import { IncomingMessage } from "http";
import { TBotByeInitOptions, TBotByeResponse, TValidateRequestOptions as TValidateRequestOptionsCore } from "botbye-node-core";
declare function init(options: TBotByeInitOptions): typeof validateRequest;
type TValidateRequestOptions = Omit<TValidateRequestOptionsCore, "requestInfo" | "headers"> & {
    request: IncomingMessage;
};
declare function validateRequest(options: TValidateRequestOptions): Promise<TBotByeResponse>;
export { type TValidateRequestOptions, type TBotByeResponse, init, validateRequest, };
