# code-challenge-template

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.16.0.

## Initial Setup

1. Run `npm install`
2. Run `bower install`
3. Run `npm install karma`
4. Run `npm install grunt-karma`

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

# Challenge Description

At Cambria, we would like a web application to track our designs through reaseach and development (R&D) to deprication or release. The users need to be able interact with a data table to view the designs as they please.

## Acceptance Criteria

1. The designs are displayed in a 3 column data table.
   1.1 Design Name
   1.2 Created At
   1.3 Status
2. The data table can be sorted by any of the columns.
   2.1 Design Name is sorted alphabetically
   2.2 Created At is sorted chronologically
   2.3 Status is sorted by process step. The users would like to sort statuses in the order of "R&D", "Release", then "Deprication"
