import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useState } from "react";
import Dropzone, { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "../components/Button";
import Form from "../components/form/Form";
import TextInput from "../components/form/TextInput";
import FileUpload from "./form/FileUpload";
const schema = yup
  .object({
    oldPassword: yup
      .string()
      .min(8)
      .max(32)
      .required("Old Password is required"),
    newPassword: yup
      .string()
      .min(8)
      .max(32)
      .required("New Password is required"),
    retypePassword: yup
      .string()
      .min(8)
      .max(32)
      .required("Retype Password is required"),
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
            placeholder="*****"
            label="Old Password"
            type="password"
            name="oldPassword"
            register={register}
            errors={errors}
          />
          <TextInput
            placeholder="*****"
            label="New Password"
            type="password"
            name="newPassword"
            register={register}
            errors={errors}
          />
          <TextInput
            placeholder="*****"
            label="Retype Password"
            type="password"
            name="retypePassword"
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
