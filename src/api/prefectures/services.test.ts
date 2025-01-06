import { api } from '@/api/client';
import { handleApiError } from '@/api/helpers/errorHandler';
import { fetchPrefectures } from '@/api/prefectures/services';
import type { PrefecturesResponse } from '@/api/prefectures/types';

jest.mock('@/api/client', () => ({
  api: {
    apiV1PrefecturesGet: jest.fn(),
  },
}));

jest.mock('@/api/helpers/errorHandler', () => ({
  handleApiError: jest.fn(),
}));

describe('fetchPrefectures', () => {
  const mockApiResponse: PrefecturesResponse = [
    { prefCode: 1, prefName: '北海道' },
    { prefCode: 2, prefName: '青森県' },
  ];

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('API呼び出しが成功した場合、都道府県リストを返す', async () => {
    (api.apiV1PrefecturesGet as jest.Mock).mockResolvedValue({
      result: mockApiResponse,
    });

    const result = await fetchPrefectures();

    expect(api.apiV1PrefecturesGet).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockApiResponse);
  });

  it('API呼び出しが失敗した場合、handleApiErrorを呼び出し、空の配列を返す', async () => {
    const mockError = new Error('API error');
    (api.apiV1PrefecturesGet as jest.Mock).mockRejectedValue(mockError);

    const result = await fetchPrefectures();

    expect(api.apiV1PrefecturesGet).toHaveBeenCalledTimes(1);
    expect(handleApiError).toHaveBeenCalledWith(mockError);
    expect(result).toEqual([]);
  });
});
