import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import logo from'../public/images/logo.png'

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const formHandler = (formValues) => {

  };
  return (
    <>
      <div className="flex flex-col bg-primary-background items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="w-full md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className={"flex w-full justify-center"}>
              <Image
                alt={"megak"}
                src={logo}
                className={"object-fill w-36 "}
              />
            </div>
            <form
              onSubmit={handleSubmit((formValues) => formHandler(formValues))}
              className="space-y-4"
            >
              <div>
                <Input
                  placeholder="E-mail"
                  register={...register("email", { required: true })}
                />
              </div>
              <div>
                <Input
                  register={...register("password", { required: true })}
                  password
                  placeholder={"Hasło"}
                />
              </div>
              <div className="flex flex-row-reverse mb-6">
                <Link href={"/ForgottenPasswordPage"}>
                  <span className={"text-light-primary-text"}>
                    Zapomniałeś hasła?
                  </span>
                </Link>
              </div>
              <div className={"flex items-center justify-between"}>
                <span className="text-sm font-light text-light-primary-text">
                  Nie masz konta?{" "}
                  <Link
                    href={"/register"}
                    className="font-medium cursor-pointer underline"
                  >
                    Zarejestruj się
                  </Link>
                </span>
                <Button>Zaloguj się</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
