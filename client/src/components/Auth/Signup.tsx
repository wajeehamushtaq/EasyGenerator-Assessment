import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { signupFields } from '../../constants/formFields';
import FormAction from '../Common/FormAction';
import Input from '../Common/Input';
import { useAuth } from '../../context/auth';
import useApiRequest from '../../hooks/useApiRequest';
import createFormData from '../../utils/createFormData';

interface SignupState {
  [key: string]: string | '';
}

const fields = signupFields;
const fieldsState: SignupState = {};
fields.forEach((field) => (fieldsState[field.id] = ''));

export default function Signup() {
  const { login } = useAuth();
  const [signupState, setSignupState] = useState<SignupState>(fieldsState);
  const [errorMessage, setErrorMessage] = useState<string | string[]>([]);
  const { error, data, sendRequest } = useApiRequest();

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
      setSignupState({ ...signupState, [e.target.id]: e.target.value });
  };

  const createAccount = async () => {
    try {
      const formData = createFormData(signupState);
      const url =  'http://localhost:3000/auth/signup'
      const option = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: formData
      }

      const response = await sendRequest(url, option);

      if (response.error) {
        setErrorMessage(response.message);
      } else if (!error) {
        console.log('Signup successful');
      } else {
        console.error('Signup failed');
      }
    } catch (err) {
      console.error('Error during signup:', err);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (signupState.name === '' || signupState.email === '' || signupState.password === '') {
      setErrorMessage('All fields are required')
      return
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(signupState.password as string)) {
      setErrorMessage(
        'Password must contain at least one uppercase letter, one number, and be at least 8 characters long'
      );
      return;
    }

    setErrorMessage('');
    createAccount();
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            isRequired={field.isRequired}
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
          />
        ))}

        {Array.isArray(errorMessage) ? (
          errorMessage.map((msg, index) => (
            <p key={index} className="text-red-500 text-sm mt-2">
              {msg}
            </p>
          ))
        ) : (
          <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        )}

        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
}
