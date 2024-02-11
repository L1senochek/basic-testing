import axios, { AxiosInstance } from 'axios';
import { THROTTLE_TIME, throttledGetDataFromApi } from './index';

jest.mock('axios');

describe('throttledGetDataFromApi', () => {
  const baseURL = 'https://jsonplaceholder.typicode.com';
  const data = 'data';
  const postsUrl = '/posts';

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  test('should create instance with provided base url', async () => {
    const axiosInstanceMock = {
      get: jest.fn().mockResolvedValueOnce({ data: data }),
    } as unknown as AxiosInstance;
    const axiosCreateMock = axios.create as jest.MockedFunction<
      typeof axios.create
    >;
    axiosCreateMock.mockReturnValueOnce(axiosInstanceMock);
    jest.advanceTimersByTime(THROTTLE_TIME);
    await Promise.resolve();

    const result = await throttledGetDataFromApi(postsUrl);
    jest.runAllTimers();

    expect(axios.create).toHaveBeenCalledWith({ baseURL });
    expect(axiosInstanceMock.get).toHaveBeenCalledWith(postsUrl);
    expect(result).toEqual(data);
  });

  test('should perform request to correct provided url', async () => {
    //
  });

  test('should return response data', async () => {
    const data = 'data';
    const postsUrl = '/posts';
    const axiosInstanceMock = {
      get: jest.fn().mockResolvedValueOnce({ data: data }),
    } as unknown as AxiosInstance;
    const axiosCreateMock = axios.create as jest.MockedFunction<
      typeof axios.create
    >;
    axiosCreateMock.mockReturnValueOnce(axiosInstanceMock);
    const result = await throttledGetDataFromApi(postsUrl);

    await Promise.resolve();
    jest.runAllTimers();

    expect(result).toEqual(data);
  });
});
