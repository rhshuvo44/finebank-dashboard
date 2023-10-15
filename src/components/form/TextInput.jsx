import Label from "./Label";

const TextInput = ({ name, label, errors, register, ...rest }) => {
  return (
    <div className="form-control w-full">
      <Label label={label} id={name} />
      <input
        id={name}
        name={name}
        {...rest}
        className="input input-bordered mb-2"
        {...register(name, { required: true })}
        required
      />
      {errors[name] && (
        <p className="text-xs text-left text-error">{errors[name].message}</p>
      )}
    </div>
  );
};

export default TextInput;
