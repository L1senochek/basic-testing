import axios, { AxiosInstance } from 'axios';
import { THROTTLE_TIME, throttledGetDataFromApi } from './index';

jest.mock('axios');

describe('throttledGetDataFromApi', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.useRealTimers();
  });

  test('should create instance with provided base url', async () => {
    const baseURL = 'https://jsonplaceholder.typicode.com';
    const data = 'data';
    const postsUrl = '/posts';
    const axiosInstanceMock = {
      get: jest.fn().mockResolvedValueOnce({ data: data }),
    } as unknown as AxiosInstance;
    const axiosCreateMock = axios.create as jest.MockedFunction<
      typeof axios.create
    >;
    axiosCreateMock.mockReturnValueOnce(axiosInstanceMock);

    jest.advanceTimersByTime(THROTTLE_TIME);
    await new Promise((resolve) => process.nextTick(resolve));

    const result = await throttledGetDataFromApi(postsUrl);

    expect(axios.create).toHaveBeenCalledWith({ baseURL });
    expect(axiosInstanceMock.get).toHaveBeenCalledWith(postsUrl);
    expect(result).toEqual(data);
  });

  test('should perform request to correct provided url', async () => {
    //
  });

  test('should return response data', async () => {
    //
  });
});
