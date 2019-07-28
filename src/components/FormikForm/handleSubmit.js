export default (values, { resetForm, setErrors, setSubmitting }) => {
  setTimeout(() => {
    if (values.email === '123@123.com') {
      setErrors({ email: 'bad credential' });
    } else {
      // resetForm();
    }
    setErrors({ bad: 'contact me for login' });
    setSubmitting(false);
  }, 2000);
};
