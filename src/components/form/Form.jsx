const Form = ({ children, ...rest }) => {
  return (
    <form className="card-body" {...rest}>
      {children}
    </form>
  );
};

export default Form;
