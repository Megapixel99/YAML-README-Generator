### / - GET

Summary: List API versions

#### Responses:

###### Status Code: 200

Response Description: 200 response

Content: application/json
###### Status Code: 300

Response Description: 300 response

Content: application/json

### /v2 - GET

Summary: Show API version details

#### Responses:

###### Status Code: 200

Response Description: 200 response

Content: application/json
###### Status Code: 203

Response Description: 203 response

Content: application/json

### /ping - GET

Tags: developers

Summary: receive a pong response from the server

Route Description: By going to the ping endpoint, the server
will send pong if the request is succesful

#### Responses:

###### Status Code: 200

Response Description: receive 'pong' from the server

Content: application/json
