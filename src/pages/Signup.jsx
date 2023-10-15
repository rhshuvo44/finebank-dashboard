import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import Button from "../components/Button";
import Form from "../components/form/Form";
import FormTitle from "../components/form/FormTitle";
import GoogleBtn from "../components/form/GoogleBtn";
import TextInput from "../components/form/TextInput";

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is Required"),
    password: yup.string().min(8).max(32).required("Password is required"),
  })
  .required();
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <div className="hero min-h-screen bg-base-100 mb-10">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <FormTitle text="FINEbank.IO" subtitle="Create an account" />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              placeholder="Enter Your Name"
              label="Name"
              type="text"
              name="name"
              register={register}
              errors={errors}
            />
            <TextInput
              placeholder="Enter Your Email Address"
              label="Email Address"
              type="email"
              name="email"
              register={register}
              errors={errors}
            />
            <TextInput
              placeholder="Enter Your Password"
              label="Password"
              type="password"
              name="password"
              register={register}
              errors={errors}
            />
            <p className="text-left">
              By continuing, you agree to our{" "}
              <Link to="/" className="text-primary">
                terms of service.
              </Link>
            </p>
            <div className="form-control mt-6">
              <Button text="Sign up" />
            </div>
          </Form>
          <div className="divider">
            <p className="shadow-md p-2">or sign in with</p>
          </div>
          <GoogleBtn />
          <p className="text-secondary">
            Already have an account?{" "}
            <Link to="/login" className="text-primary ">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
