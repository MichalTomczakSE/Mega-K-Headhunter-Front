import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Input } from "@/components/common/Input";
import { Button } from "@/components/common/Button";
import logo from'../public/images/logo.png'
import {useCookies} from "react-cookie";
import {useState} from "react";
import {useRouter} from "next/router";


interface FormValues{
  username:string;
  password:string;
}

const LoginPage = () => {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const [message,setMessage]=useState<string>("")
  const [cookie,setCookie]=useCookies(['userInfo'])
  const { push } = useRouter();


  const formHandler = async(formValues:FormValues) => {
    const resp=await fetch('http://localhost:3000/auth/login',{
      body:JSON.stringify(formValues),
      headers:{
        "Content-Type": "application/json",
      },
      method:'POST'
    })

    const data:{email?:string,id?:string,role?:number,token?:{access_token:string}}=await resp.json()
    if(data.token){
      const{email,id,role}=data
      setCookie('userInfo',{token:data.token.access_token,email,id,role},{ path: '/' })
      await push('/')
    }
    else{
      setMessage("Nie znaleziono użytkownika")
    }
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
            <div>{message&&<p>{message}</p>}</div>
            <form
              onSubmit={handleSubmit((formValues) => formHandler(formValues))}
              className="space-y-4"
            >
              <div>
                <Input
                  placeholder="E-mail"
                  register={register("username", { required: true })}
                />
              </div>
              <div>
                <Input
                  register={register("password", { required: true })}
                  password
                  placeholder={"Hasło"}
                />
              </div>
              <div className="flex flex-row-reverse mb-6">
                <Link href={"/forgotPassword"}>
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
                <Button type={"submit"}>Zaloguj się</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
