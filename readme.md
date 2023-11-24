# HTTP

## Install

```bash
npm i botbye-node-http
```

or

```bash
yarn add botbye-node-http
```

### Usage

#### 1. Import `botbye` module:

```javascript
const botbye = require('botbye-node-http')
```

#### 2. Call `init` with SERVER_KEY:

```javascript
const validateRequest = botbye.init({
    serverKey: 'MY_SERVER_KEY'
});
```

#### 3. Use `validateRequest` on handlers where you need bot protection

```javascript

http.createServer(async (req, res) => {
    const botbyeToken = req.headers['botbye-challenge']   // get token from header or any place you store it

    /**
     * Additional custom fields for linking request
     **/
    const customFileds = [
        'my custom field 1 value',
        'my custom field 2 value',
        'my custom field 3 value'
    ];

    const options = {
        token: botbyeToken,
        request: req,
        customFileds
    }

    /**
     * @param {Object} options - Options for request validation
     * @return {Promise} - botByeResponse promise
     */
    const botByeResponse = await botbye.validateRequest(options);

    if (botByeResult.result?.isBot) {
    ...
    }
...
})

```

### Examples of botByeResponse:

#### Bot detected:

```json
{
  "reqId": "f77b2abd-c5d7-44f0-be4f-174b04876583",
  "result": {
    "isAllowed": false
  },
  "error": null
}
```

#### Bot not detected:

```json
{
  "reqId": "f77b2abd-c5d7-44f0-be4f-174b04876583",
  "result": {
    "isAllowed": true
  },
  "error": null
}
```

#### Ban by rule:

```json
{
  "reqId": "f77b2abd-c5d7-44f0-be4f-174b04876583",
  "result": {
    "isAllowed": false
  },
  "error": {
    "message": "Banned by rule: ban by country"
  }
}
```

#### Invalid serverKey:

```json
{
  "reqId": "f77b2abd-c5d7-44f0-be4f-174b04876583",
  "result": null,
  "error": {
    "message": "[BotBye] Bad Request: Invalid Server Key"
  }
}
```

#### 4. Full code example

```javascript
const http = require('http');
const botbye = require('botbye-node-http')


botbye.init({
    serverKey: 'MY_SERVER_KEY'
});

const server = http.createServer(async (req, res) => {
    const botbyeToken = req.headers['BotBye-Token']   // get token from header or any place you store it

    const options = {
        token: botbyeToken,
        request: req
    }

    const botByeResponse = await botBye.validateRequest(options);

    const isBot = botByeResponse.result?.isAllowed ?? true;

    res.statusCode = isAllowed ? 200 : 403;
    res.end();
})

const PORT = 3000;

server.listen(PORT, () => {
...
})


```
