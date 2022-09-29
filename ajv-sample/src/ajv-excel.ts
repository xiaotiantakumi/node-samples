import Ajv, {JSONSchemaType} from "ajv"
const ajv = new Ajv()

const schema = {
  "$id": "http://example.com/schemas/schema.json",
  "$schema": "http://json-schema.org/draft-07/schema",
  "title": "Your title comes here",
  "description": "Your description comes here",
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "$schema": {
      "type": "string"
    },
    "A": {
      "description": "This is an example of string type",
      "type": "string"
    },
    "B": {
      "description": "This is an example of string type",
      "type": "string"
    },
    "C": {
      "description": "This is an example of string type",
      "type": "string"
    },
    "D": {
      "description": "This is an example of string type",
      "type": "string"
    },
    "E": {
      "description": "This is an example of string type",
      "type": "string"
    },
    "F": {
      "description": "This is an example of string type",
      "type": "string"
    },
  }
}

// validate is a type guard for MyData - type is inferred from schema type
const validate = ajv.compile(schema)

// or, if you did not use type annotation for the schema,
// type parameter can be used to make it type guard:
// const validate = ajv.compile<MyData>(schema)

const data =   {
  A: 'Event ID',
  B: 'a',
  C: 'Location',
  D: null,
  E: 'Speakers',
  F: 'Num'
}

const main = () => {
    if (validate(data)) {
        // data is MyData here
        console.log(data)
      } else {
        console.log(validate.errors)
      }
};

export {main};