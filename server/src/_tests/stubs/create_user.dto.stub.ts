import { CreateUserDto } from '../../_dtos/create_user.dto';

export const CreateUserDtoStub = (): CreateUserDto => {
  return {
    email: 'wajeeha@gmail.com',
    name: 'Wajeeha Mushtaq',
    password: 'Test@12345',
  };
};
