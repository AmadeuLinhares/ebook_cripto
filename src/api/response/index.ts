import {AxiosError} from 'axios';

export type RawError = {
  error: {
    code: number;
    http_code?: number;
    message: string;
    detail?: {
      message: string;
    };
  };
};

export type ErrorRequest = AxiosError<RawError>;

type DefaultResponse<Data> = {
  items: Data;
};

export type RawResponse<Data> = DefaultResponse<Data>;
