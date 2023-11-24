import type { IncomingMessage } from 'node:http';
import type { TBotByeResponse } from 'botbye-node-core';

export function init(serverKey: string): typeof validateRequest;

export function validateRequest(token: string, request: IncomingMessage, customFields?: string[]): Promise<TBotByeResponse>;
