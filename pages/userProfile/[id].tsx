import { UserDetails } from "@/components/common/userProfile/userDetails/userDetails";
import { UserInfo } from "@/components/common/userProfile/userInfo/userInfo";
import { Header } from "@/components/common/Header";
import { GoBack } from "@/components/common/goBack/goBack";
import { useEffect, useState } from "react";
import { StudentEntity, StudentStartData } from "@/interfaces/student/student";
import {useRouter} from "next/router";


const UserProfile = () => {
  const [data, setData] = useState<StudentEntity>(StudentStartData);
  const [edit, setEdit] = useState<boolean>(true);

  const router=useRouter()



  useEffect(() => {

      if(router.query.id) {
          fetch(`http://localhost:3000/student/${router.query.id}`)
              .then((resp) => resp.json())
              .then((resp) => {
                  console.log(resp)
                  if (resp.respstatusCode) {
                      router.push('/errorPage')
                  } else {
                      console.log("działa")
                      setData(resp);
                  }
              });
      }
  }, [router]);

  const send=()=>{

  }


  if (data.email !== "") {
    return (
      <div>
        <Header />
        <div
          className={
            "flex h-auto sm:h-full sm:flex-row flex-col  pt-5  bg-primary-background space-y-2 sm:space-y-0 space-x-0 sm:space-x-2"
          }
        >
          <GoBack />

          <div className={"sm:h-screen flex justify-center"}>
            <UserDetails
              edit={edit}
              setEdit={setEdit}
              data={data}
              setData={setData}
            />
          </div>
          <div className={"w-full"}>
            <UserInfo
              edit={edit}
              setEdit={setEdit}
              data={data}
              setData={setData}
              send={send}
            />
          </div>

        </div>

      </div>
    );
  } else {
    return <>Loading ...</>;
  }
};

export default UserProfile;
