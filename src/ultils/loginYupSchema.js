import * as Yup from 'yup';

const requiredErrorMessage = 'Email is empty';

const loginShema = Yup.object().shape({
  email: Yup.string().email().required(requiredErrorMessage),
  password: Yup.string().min(10),
});

export { loginShema };
