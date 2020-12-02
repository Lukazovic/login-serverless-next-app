import { NowRequest, NowResponse } from '@vercel/node';

import sessionController from '../../../../app/controllers/sessionController';

export default function userHandler(
  request: NowRequest,
  response: NowResponse
) {
  const { method } = request;

  switch (method) {
    case 'POST':
      sessionController.create(request, response);
      break;
    default:
      response.setHeader('Allow', ['POST']);
      response.status(405).end(`Method ${method} Not Allowed`);
  }
}
