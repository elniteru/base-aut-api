"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responseOK = (response) => {
    expect(response.status).toEqual(200);
    expect(response.data).not.toBeUndefined();
};
const responseCreated = (response) => {
    expect(response.status).toEqual(201);
    expect(response.data).not.toBeUndefined();
};
const responseAccepted = (response) => {
    expect(response.status).toEqual(202);
    expect(response.data).not.toBeUndefined();
};
const responseBadRequest = (response) => {
    expect(response.status).toEqual(400);
    expect(response.data).not.toBeUndefined();
};
const responseUnauthorized = (response) => {
    expect(response.status).toEqual(401);
    expect(response.data).not.toBeUndefined();
};
const responseNotFound = (response) => {
    expect(response.status).toEqual(404);
    expect(response.data).not.toBeUndefined();
};
const responseMethodNotAllowed = (response) => {
    expect(response.status).toEqual(405);
    expect(response.data).not.toBeUndefined();
};
const responseRequestTimeOut = (response) => {
    expect(response.status).toEqual(408);
    expect(response.data).not.toBeUndefined();
};
const responseInternalServerError = (response) => {
    expect(response.status).toEqual(500);
    expect(response.data).not.toBeUndefined();
};
const responseBadGateway = (response) => {
    expect(response.status).toEqual(502);
    expect(response.data).not.toBeUndefined();
};
const responseServiceUnavailable = (response) => {
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
exports.default = HApiAssert;
