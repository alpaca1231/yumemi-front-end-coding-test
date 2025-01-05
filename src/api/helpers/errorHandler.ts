export const handleApiError = (error: unknown): string => {
  if (error instanceof Error) {
    throw new Error(`Failed to fetch:  ${error.message}`);
  }
  throw new Error('An unexpected error occurred');
};
