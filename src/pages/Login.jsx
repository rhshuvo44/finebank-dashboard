import Form from "../components/form/Form";
import TextInput from "../components/form/TextInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../components/Button";
import Checkbox from "../components/form/Checkbox";
import FormTitle from "../components/form/FormTitle";
import GoogleBtn from "../components/form/GoogleBtn";
import { Link } from "react-router-dom";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is Required"),
    password: yup.string().min(8).max(32).required("Password is required"),
  })
  .required();
const Login = () => {
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
          <FormTitle text="FINEbank.IO" />
          <Form onSubmit={handleSubmit(onSubmit)}>
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
            <Checkbox label="Keep me signed in" />
            <div className="form-control mt-6">
              <Button text="Login" />
            </div>
          </Form>
          <div className="divider">
            <p className="shadow-md p-2">or sign in with</p>
          </div>
          <GoogleBtn />
          <Link to="/" className="text-primary font-bold text-xl">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
