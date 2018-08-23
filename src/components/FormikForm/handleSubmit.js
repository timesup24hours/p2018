export default (values, { resetForm, setErrors, setSubmitting }) => {
  setTimeout(() => {
    if (values.email === '123@123.com') {
      setErrors({ email: 'That email is already taken' });
    } else {
      resetForm();
    }
    setSubmitting(false);
  }, 2000);
};
