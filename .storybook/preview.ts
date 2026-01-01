import type { Preview } from '@storybook/react-webpack5';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { GlobalStyle } from '../src/global';
import {Theme} from '../src/theme';
import {ThemeProvider} from 'styled-components';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyle,
    themes: {
      theme: Theme,
    },
    defaultTheme: 'theme',
    Provider: ThemeProvider,
  })
]