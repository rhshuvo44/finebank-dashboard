import Form from "../components/form/Form";
import TextInput from "../components/form/TextInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../components/Button";

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
    <div className="card min-w-full text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-primary">FINEbank.IO</h2>
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

          <div className="form-control mt-6">
            <Button />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
