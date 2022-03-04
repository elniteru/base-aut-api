import { AxiosResponse } from "axios";
declare const HApiAssert: {
    responseOK: (response: AxiosResponse) => void;
    responseCreated: (response: AxiosResponse) => void;
    responseAccepted: (response: AxiosResponse) => void;
    responseBadRequest: (response: AxiosResponse) => void;
    responseUnauthorized: (response: AxiosResponse) => void;
    responseNotFound: (response: AxiosResponse) => void;
    responseMethodNotAllowed: (response: AxiosResponse) => void;
    responseRequestTimeOut: (response: AxiosResponse) => void;
    responseInternalServerError: (response: AxiosResponse) => void;
    responseBadGateway: (response: AxiosResponse) => void;
    responseServiceUnavailable: (response: AxiosResponse) => void;
};
export default HApiAssert;
