import { Tabletojson } from 'tabletojson';

const convertUrlToJson = (reportUrl: string) => {
  return Tabletojson.convertUrl(reportUrl);
};

const convertHtmlFileToJson = (reportContent: string) => {
  return Tabletojson.convert(reportContent);
};

const HHtmlToJson = {
  convertUrlToJson,
  convertHtmlFileToJson
};

export default HHtmlToJson;
