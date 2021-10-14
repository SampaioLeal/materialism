"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilterValue = exports.buildInitialValues = void 0;
function buildInitialValues(columns) {
    var initialValues = {};
    columns.forEach(function (column) {
        if (column.filterable || column.filterable === undefined)
            initialValues[column.field] = "";
    });
    return initialValues;
}
exports.buildInitialValues = buildInitialValues;
function getFilterValue(filter, values) {
    switch (filter.type) {
        case "enum":
            var enumerable = values[filter.field];
            return Object.entries(enumerable)
                .filter(function (_a) {
                var value = _a[1];
                return value;
            })
                .map(function (_a) {
                var key = _a[0];
                return key;
            });
        default:
            return values[filter.field];
    }
}
exports.getFilterValue = getFilterValue;
