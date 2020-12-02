// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NowRequest, NowResponse } from '@vercel/node';

import userController from '../../../app/controllers/userController';

export default function userHandler(
  request: NowRequest,
  response: NowResponse
) {
  const { method } = request;

  switch (method) {
    case 'GET':
      userController.index(request, response);
      break;
    case 'POST':
      userController.create(request, response);
      break;
    default:
      response.setHeader('Allow', ['GET', 'POST']);
      response.status(405).end(`Method ${method} Not Allowed`);
  }
}
