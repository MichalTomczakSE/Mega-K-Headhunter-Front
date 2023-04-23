import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
const test = () => {
  console.log("ffdsfd");
};

export const RegisterAndForgottenPassword = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
    },
  });
  const router = useRouter();
  const formHandler = (formValues) => {
    //ToDo api connection
    console.log(router.pathname);
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
              <label>
                <div>
                  <Input
                    placeholder="E-mail"
                    register={...register("email", { required: true })}
                  />
                </div>
              </label>
              <div className={"flex items-center justify-between"}>
                <Button onClick={test}>Wyślij</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
