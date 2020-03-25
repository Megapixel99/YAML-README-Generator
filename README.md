# YAML README Generator

## Purpose/Goal

If you use an OpenAPI 3.0 YAML Specification, you can run this NodeJS script to
generate a preformatted list of the available routes and their response(s).

## How to initialize the project

To initialize the project run:

```
$ npm i
```

## How to run the project

To run the project you can either run with:

```
$ npm start
```

which will look for an `api.yaml` file in the root directory of the project, or
you can run the project with:

```
$ npm start ./api.yaml ./schema.yaml ./other.yaml
```

which will look for all of the yaml files specified as command line arguments.
Upon running the project the specification for the yaml file(s), the program
will output to the Terminal/Command Prompt and will need to be copied to the
appropriate README file.

### Or

You can run the project with

```
$ node ./index.js
```
or

```
$ node ./index.js ./api.yaml ./schema.yaml ./other.yaml
```

#### Please see `ExampleOutput.md` for an example of the output, which was generated with the command:

```
$ npm start ./api.yaml ./views.yaml
```

##### Contributions are appreciated
