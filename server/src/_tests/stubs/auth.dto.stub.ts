import { AuthDto } from 'src/_dtos/auth.dto';

export const AuthDtoStub = (): AuthDto => {
  return {
    email: 'wajeeha@gmail.com',
    password: 'Test@12345',
  };
};
