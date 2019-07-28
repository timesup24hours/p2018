export default (values, { resetForm, setErrors, setValues, setSubmitting }) => {
  setTimeout(() => {
    if (values.email === '123@123.com') {
      setErrors({ email: 'this email has not been registered' });
    } else {
      // resetForm();
      setErrors({ email: 'this email has not been registered' });
      // setValues({ ...values, success: true });
    }
    setSubmitting(false);
  }, 2000);
};
