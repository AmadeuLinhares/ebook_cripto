import type {AxiosError} from 'axios';

export default function shouldRetryQuery(
  failureCount: number,
  error: AxiosError,
): boolean {
  if (
    !error ||
    error?.response?.status === 401 ||
    error?.response?.status === 404 ||
    error?.response?.status === 500
  ) {
    return false;
  }

  return failureCount <= 3;
}
