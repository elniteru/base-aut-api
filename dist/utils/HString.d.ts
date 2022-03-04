declare const HString: {
    parseValueToKeyString: (text: string, key: string, value: string) => string;
    parseIntoQueryParams: (endPoint: string, urlQueryObject: any, withEncodeObject?: boolean) => string;
};
export default HString;
