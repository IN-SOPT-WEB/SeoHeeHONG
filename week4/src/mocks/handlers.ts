import { rest } from 'msw';

export const handlers = [
  // Handles a GET /user request
  rest.get(`${process.env.REACT_APP_IP}/search/Happhee`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          avatar_url: 'https://avatars.githubusercontent.com/u/79238676?v=4',
          name: '瑞喜',
          login: 'Happhee',
          html_url: 'https://github.com/Happhee',
          followers: 45,
          following: 44,
          public_repos: 28,
        },
      }),
    );
  }),
];
