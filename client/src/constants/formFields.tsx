interface FormField {
    labelText: string;
    labelFor: string;
    id: string;
    name: string;
    type: string;
    autoComplete?: string;
    isRequired: boolean;
    placeholder: string;
  }
  
  const loginFields: FormField[] = [
    {
      labelText: 'Email address',
      labelFor: 'email',
      id: 'email',
      name: 'email',
      type: 'email',
      autoComplete: 'email',
      isRequired: true,
      placeholder: 'Email address',
    },
    {
      labelText: 'Password',
      labelFor: 'password',
      id: 'password',
      name: 'password',
      type: 'password',
      autoComplete: 'current-password',
      isRequired: true,
      placeholder: 'Password',
    },
  ];
  
  const signupFields: FormField[] = [
    {
      labelText: 'Name',
      labelFor: 'name',
      id: 'name',
      name: 'name',
      type: 'text',
      autoComplete: 'name',
      isRequired: true,
      placeholder: 'Name',
    },
    {
      labelText: 'Email',
      labelFor: 'email',
      id: 'email',
      name: 'email',
      type: 'email',
      autoComplete: 'email',
      isRequired: true,
      placeholder: 'Email',
    },
    {
      labelText: 'Password',
      labelFor: 'password',
      id: 'password',
      name: 'password',
      type: 'password',
      autoComplete: 'password',
      isRequired: true,
      placeholder: 'Password',
    },
  ];
  
  const productFields: FormField[] = [
    {
      labelText: 'Name',
      labelFor: 'name',
      id: 'name',
      name: 'name',
      type: 'text',
      autoComplete: 'name',
      isRequired: true,
      placeholder: 'Name',
    },
    {
      labelText: 'Description',
      labelFor: 'description',
      id: 'description',
      name: 'description',
      type: 'text',
      autoComplete: 'description',
      isRequired: true,
      placeholder: 'Description',
    },
    {
      labelText: 'Price',
      labelFor: 'price',
      id: 'price',
      name: 'price',
      type: 'number',
      autoComplete: 'price',
      isRequired: true,
      placeholder: 'Price',
    },
  ];
  
  export { loginFields, signupFields, productFields };  