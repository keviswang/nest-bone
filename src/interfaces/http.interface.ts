// 响应状态
export enum EHttpStatus {
  Error = 'error',
  Success = 'success',
}

export type TExceptionOption =
  | string
  | {
      message: string;
      error?: any;
    };

// 翻页数据
export interface IHttpResultPaginate<T> {
  data: T;
  params: any;
  pagination: {
    total: number;
    current_page: number;
    total_page: number;
    per_page: number;
  };
}

// HTTP 状态返回
export interface IHttpResponseBase {
  status: EHttpStatus;
  message: string;
}

// HTTP error
export type THttpErrorResponse = IHttpResponseBase & {
  error: any;
  debug?: string;
};

// HTTP success 返回
export type THttpSuccessResponse<T> = IHttpResponseBase & {
  result: T | IHttpResultPaginate<T>;
};

// HTTP Response
export type THttpResponse<T> = THttpErrorResponse | THttpSuccessResponse<T>;
