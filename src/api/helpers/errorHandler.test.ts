import { handleApiError } from '@/api/helpers/errorHandler';

describe('handleApiError', () => {
  it('Error インスタンスからのメッセージを使用して新しいエラーをthrowする', () => {
    const error = new Error('Error message');

    expect(() => handleApiError(error)).toThrow(
      'Failed to fetch:  Error message',
    );
  });

  it('未知のエラータイプに対して汎用的なエラーメッセージをthrowする', () => {
    const error = { unexpected: true };

    expect(() => handleApiError(error)).toThrow('An unexpected error occurred');
  });

  it('undefined や null のエラーを適切に処理する', () => {
    expect(() => handleApiError(undefined)).toThrow(
      'An unexpected error occurred',
    );

    expect(() => handleApiError(null)).toThrow('An unexpected error occurred');
  });
});
