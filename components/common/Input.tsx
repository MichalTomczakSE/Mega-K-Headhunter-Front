import {UseFormRegisterReturn} from "react-hook-form";


interface InputProps {
  password: boolean;
  placeholder: string;
    register?: UseFormRegisterReturn<string>;
}

export const Input = ({ password, placeholder, register }: InputProps) => {
  return (
    <>
      <div>
        <input
          {...register}
          placeholder={placeholder}
          type={password ? "password" : "text"}
          className="bg-secondary-background placeholder-dark-primary-text text-gray-900 text-sm block w-full p-2.5 text-white"
        />
      </div>
    </>
  );
};
