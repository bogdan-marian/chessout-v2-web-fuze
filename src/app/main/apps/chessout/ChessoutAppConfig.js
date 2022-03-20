import ChessoutApp from './ChessoutApp';

const ChessoutAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/chessout',
      element: <ChessoutApp />,
    },
  ],
};

export default ChessoutAppConfig;
