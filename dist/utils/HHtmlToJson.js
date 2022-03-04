"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tabletojson_1 = require("tabletojson");
const convertUrlToJson = (reportUrl) => {
    return tabletojson_1.Tabletojson.convertUrl(reportUrl);
};
const convertHtmlFileToJson = (reportContent) => {
    return tabletojson_1.Tabletojson.convert(reportContent);
};
const HHtmlToJson = {
    convertUrlToJson,
    convertHtmlFileToJson
};
exports.default = HHtmlToJson;
