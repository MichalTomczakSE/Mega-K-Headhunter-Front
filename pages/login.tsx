import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { useForm } from "react-hook-form";
const test = () => {
  console.log("ffdsfd");
};

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const formHandler = (formValues) => {
    console.log(formValues);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className={"flex w-full justify-center"}>
              <img
                alt={"megak"}
                src={
                  "https://static1.s123-cdn-static-a.com/uploads/5191798/400_609bb5e2d9a39.png"
                }
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
                <a>Zapomniałeś hasła?</a>
              </div>
              <div className={"flex items-center justify-between"}>
                <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Nie masz konta?{" "}
                  <a className="font-medium cursor-pointer text-primary-600 underline dark:text-primary-500">
                    Zarejestruj się
                  </a>
                </span>
                <Button onClick={test}>Zaloguj się</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
