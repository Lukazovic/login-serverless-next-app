import * as Yup from 'yup';

import { IUser } from '../helpers/interfaces/user';

const userCreate = async (user: IUser) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().min(1),
      email: Yup.string().min(5).email(),
      password: Yup.string().min(6),
      confirmPassword: Yup.string().when(
        'password',
        (password: string, field: any) =>
          password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    await schema.validate(user, { abortEarly: false });

    return { errors: false };
  } catch (err) {
    return { errors: err.errors };
  }
};

export default userCreate;
