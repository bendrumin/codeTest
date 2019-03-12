# code-challenge-template

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.16.0.

## Initial Setup

1. Run `npm install`
2. Run `bower install`

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

# Challenge Description

At Cambria, we would like a web application to track our designs through reaseach and development (R&D) to deprecated or released. Display the data from test-data/designs.csv in a data grid.

## Acceptance Criteria

1. The designs are displayed in a 3 column data table.
   * Design Name
   * Created At
   * Status
2. The data table can be sorted by any of the columns.
   * Design Name is sorted alphabetically
   * Created At is sorted chronologically
   * Status is sorted by process step. The users would like to sort statuses in the order of "R&D", "Release", then "Deprication"
