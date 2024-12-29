import type { Preview } from '@storybook/react';
import '@acab/reset.css';
import '@/styles/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
    features: {
      experimentalRSC: true,
    },
  },
};

export default preview;
