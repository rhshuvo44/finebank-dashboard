import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import Button from "../components/Button";
import Form from "../components/form/Form";
import FormTitle from "../components/form/FormTitle";
import TextInput from "../components/form/TextInput";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is Required"),
  })
  .required();
const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <FormTitle text="FINEbank.IO" subtitle="Forgot Password?" />
          <p className="px-20">
            Enter your email address to get the password reset link.
          </p>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              placeholder="Enter Your Email Address"
              label="Email Address"
              type="email"
              name="email"
              register={register}
              errors={errors}
            />
            <div className="form-control mt-6">
              <Button text="Password Reset" />
            </div>
          </Form>
          <Link to="/login" className="text-secondary font-bold text-xl">
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
