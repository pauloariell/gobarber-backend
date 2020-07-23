import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, respose) => {
  try {
    const { email, password } = request.body;

    const authenticateUserService = new AuthenticateUserService();

    const { user , token } = await authenticateUserService.execute({
      email,
      password,
    });

    delete user.password;

    return respose.json({ user, token });
  } catch (err) {
    return respose.status(400).json({ error: err.message });
  }
});

export default sessionsRouter;
