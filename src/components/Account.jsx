import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "../components/Button";
import Form from "../components/form/Form";
import TextInput from "../components/form/TextInput";
import FileUpload from "./form/FileUpload";
const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is Required"),
    userName: yup.string().required("User Name is required"),
    number: yup.string().min(11).max(14).required("Number is required"),
  })
  .required();
const Account = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-between md:flex-row gap-5">
        <div className="w-full md:w-1/2">
          <TextInput
            placeholder="Full Name"
            label="Full Name"
            type="text"
            name="name"
            register={register}
            errors={errors}
          />
          <TextInput
            placeholder="Email"
            label="Email"
            type="email"
            name="email"
            register={register}
            errors={errors}
          />
          <TextInput
            placeholder="User Name"
            label="User Name"
            type="text"
            name="userName"
            register={register}
            errors={errors}
          />
          <TextInput
            placeholder="+88017111111"
            label="Phone Number"
            type="tel"
            name="number"
            register={register}
            errors={errors}
          />
        </div>
        <FileUpload />
      </div>
      <div className="form-control mt-6 w-36">
        <Button text="Update Profile" />
      </div>
    </Form>
  );
};

export default Account;
