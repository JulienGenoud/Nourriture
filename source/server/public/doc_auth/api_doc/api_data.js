define({ "api": [
  {
    "type": "get",
    "url": "/clients/",
    "title": "Request all the Clients of the connected user",
    "name": "getAllUserClients",
    "group": "OAuth",
    "version": "0.1.0",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>There are no existing ingredients.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid Parameter Value",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"There are no existing clients.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "oauth/controllers/client.js",
    "groupTitle": "OAuth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of the ingredient</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of client</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the clien</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "secret",
            "description": "<p>Secret of the client</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "userId",
            "description": "<p>User id of the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n      \"name\": \"My application OAuth\",\n      \"id\": \"id_application_OAuth\",\n\t\"secret\": \"My super secret key\",\n      \"userId\": \"dfdsf84984dfdsfsf84\"\n      \n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/clients/",
    "title": "Create a new Client",
    "name": "postClient",
    "group": "OAuth",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Client succesfully created!</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n\t  {\n\t\t\"message\" : \"Client succesfully created!\"\n\t  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Bad Value Definition",
          "content": "  HTTP/1.1 400 BAD REQUEST\n  {\n\t...\n\tmongoose custom error\n\t...\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "oauth/controllers/client.js",
    "groupTitle": "OAuth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of client</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the client</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "secret",
            "description": "<p>Secret of the client</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "userId",
            "description": "<p>User id of the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n      \"name\": \"My application OAuth\",\n      \"id\": \"id_application_OAuth\",\n\t\"secret\": \"My super secret key\",\n      \"userId\": \"dfdsf84984dfdsfsf84\"\n    }",
          "type": "json"
        }
      ]
    }
  }
] });