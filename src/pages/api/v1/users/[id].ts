import { NowRequest, NowResponse } from '@vercel/node';

import userController from '../../../../app/controllers/userController';

export default function userHandler(
  request: NowRequest,
  response: NowResponse
) {
  const { method } = request;

  switch (method) {
    case 'GET':
      userController.show(request, response);
      break;
    default:
      response.setHeader('Allow', ['GET']);
      response.status(405).end(`Method ${method} Not Allowed`);
  }
}
