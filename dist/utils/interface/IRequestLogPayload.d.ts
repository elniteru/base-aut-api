export interface IRequestLogPayload {
    url: string;
    method: "GET" | "PUT" | "POST" | "PATCH" | "DELETE";
    headers: any;
    body: any;
}
