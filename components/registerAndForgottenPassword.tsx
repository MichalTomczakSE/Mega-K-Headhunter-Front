import { Input } from "@/components/common/Input";
import { Button } from "@/components/common/Button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from'../public/images/logo.png'

export const RegisterAndForgottenPassword = () => {
  const { register, handleSubmit } = useForm<{email:string}>({
    defaultValues: {
      email: "",
    },
  });
  const router = useRouter();
  const formHandler = (formValue:{email:string}) => {
  };
  return (
    <>
      <div className="flex flex-col bg-primary-background items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
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
              onSubmit={handleSubmit((formValue) => formHandler(formValue))}
              className="space-y-4"
            >
              <label>
                <div>
                  <Input
                    placeholder="E-mail"
                    register={register("email", { required: true })}
                  />
                </div>
              </label>
              <div className={"flex items-center justify-between"}>
                <Button>Wyślij</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
