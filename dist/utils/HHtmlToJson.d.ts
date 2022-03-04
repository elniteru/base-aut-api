declare const HHtmlToJson: {
    convertUrlToJson: (reportUrl: string) => Promise<any>;
    convertHtmlFileToJson: (reportContent: string) => any[];
};
export default HHtmlToJson;
