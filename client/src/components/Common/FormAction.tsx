import React, { FormEvent, MouseEventHandler } from 'react';

interface FormActionProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  type?: 'Button' | 'None';
  action?: 'submit' | 'reset' | 'button';
  text: string;
}

const FormAction: React.FC<FormActionProps> = ({
  handleSubmit,
  type = 'Button',
  action = 'submit',
  text,
}) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    handleSubmit(e as FormEvent<HTMLFormElement>);
  };

  return (
    <>
      {type === 'Button' ? (
        <button
          type={action}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
          onClick={handleClick}
        >
          {text}
        </button>
      ) : (
        <></>
      )}
    </>
  );
};

export default FormAction;
