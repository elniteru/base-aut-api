import {AxiosResponse} from "axios";

const responseOK = (response: AxiosResponse) => {
  expect(response.status).toEqual(200);
  expect(response.data).not.toBeUndefined();
}

const responseCreated = (response: AxiosResponse) => {
  expect(response.status).toEqual(201);
  expect(response.data).not.toBeUndefined();
}

const responseAccepted = (response: AxiosResponse) => {
  expect(response.status).toEqual(202);
  expect(response.data).not.toBeUndefined();
}

const responseBadRequest = (response: AxiosResponse) => {
  expect(response.status).toEqual(400);
  expect(response.data).not.toBeUndefined();
};

const responseUnauthorized = (response: AxiosResponse) => {
  expect(response.status).toEqual(401);
  expect(response.data).not.toBeUndefined();
};

const responseNotFound = (response: AxiosResponse) => {
  expect(response.status).toEqual(404);
  expect(response.data).not.toBeUndefined();
};

const responseMethodNotAllowed = (response: AxiosResponse) => {
  expect(response.status).toEqual(405);
  expect(response.data).not.toBeUndefined();
};

const responseRequestTimeOut = (response: AxiosResponse) => {
  expect(response.status).toEqual(408);
  expect(response.data).not.toBeUndefined();
};

const responseInternalServerError = (response: AxiosResponse) => {
  expect(response.status).toEqual(500);
  expect(response.data).not.toBeUndefined();
};

const responseBadGateway = (response: AxiosResponse) => {
  expect(response.status).toEqual(502);
  expect(response.data).not.toBeUndefined();
};

const responseServiceUnavailable = (response: AxiosResponse) => {
  expect(response.status).toEqual(504);
  expect(response.data).not.toBeUndefined();
};

const HApiAssert = {
  responseOK,
  responseCreated,
  responseAccepted,
  responseBadRequest,
  responseUnauthorized,
  responseNotFound,
  responseMethodNotAllowed,
  responseRequestTimeOut,
  responseInternalServerError,
  responseBadGateway,
  responseServiceUnavailable,
};
export default HApiAssert;