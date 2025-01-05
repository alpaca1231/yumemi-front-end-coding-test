import { Configuration, DefaultApi } from '@/shared';

const config = new Configuration({
  apiKey: process.env.X_API_KEY,
});

export const api = new DefaultApi(config);
