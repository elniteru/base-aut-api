import {IKeyAndValue} from "./IKeyAndValue";

export interface IRequestPayload {
  step: string,
  baseUrl: string,
  path: string,
  options?: {
    header?:IKeyAndValue[],
    queryParams?: IKeyAndValue[],
    body: any
  }
}