import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { loginFields } from '../../constants/formFields';
import FormAction from '../Common/FormAction';
import FormExtra from '../Common/FormExtra';
import Input from '../Common/Input';
import { useAuth } from '../../context/auth';
import useApiRequest from '../../hooks/useApiRequest';
import createFormData from '../../utils/createFormData'

const fields = loginFields;
const fieldsState: Record<string, string> = {};
fields.forEach((field) => (fieldsState[field.id] = ''));

export default function Login() {
  const { login } = useAuth();
  const [loginState, setLoginState] = useState(fieldsState);
  const [errorMessage, setErrorMessage] = useState('');
  const { data, error, sendRequest } = useApiRequest();

  useEffect(() => {
    if (data?.accessToken) {
      const { accessToken } = data;
      login(accessToken);
      window.location.href = '/welcome';
    } else if (data?.message) {
      setErrorMessage(data?.message);
    }
  }, [data, login]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loginState.email === '' || loginState.password === '') {
      setErrorMessage('All fields are required')
      return
    }
    setErrorMessage('');
    authenticateUser();
  };

  const authenticateUser = async () => {
    try {
      const formData = createFormData(loginState);
      const url =  'http://localhost:3000/auth/signin'
      const option = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: formData
      }

      const response = await sendRequest(url, option);

      if (response.error) {
        setErrorMessage(response.message)
      } else if (!error) {
        console.log('login successful');
      } else {
        console.error('login failed');
      }
    } catch (err) {
      console.error('Error during login:', err);
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>

      {errorMessage && (
        <div className="text-red-500 mt-2">{errorMessage}</div>
      )}

      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
}
