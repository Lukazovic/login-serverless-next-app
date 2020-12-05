import { NowRequest, NowResponse } from '@vercel/node';

import authMiddleware from '../../../../app/middlewares/auth';
import userController from '../../../../app/controllers/userController';

const handler = (request: NowRequest, response: NowResponse) => {
  const { method } = request;

  switch (method) {
    case 'GET':
      userController.show(request, response);
      break;
    default:
      response.setHeader('Allow', ['GET']);
      response.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default authMiddleware(handler);
