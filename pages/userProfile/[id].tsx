import { UserDetails } from "@/components/common/userProfile/userDetails/userDetails";
import { UserInfo } from "@/components/common/userProfile/userInfo/userInfo";
import { Header } from "@/components/common/Header";
import { GoBack } from "@/components/common/goBack/goBack";
import { Info, User } from "@/test/testData";
import { useEffect, useState } from "react";
import { StudentEntity, StudentStartData } from "@/interfaces/student/student";
import {Button} from "@/components/common/Button";
import {useRouter} from "next/router";
/*
{
  id: string;
  email: string;
  phoneNumber: string | null;
  firstName: string;
  lastName: string;
  githubUsername: string;
  portfolioUrls: string | null;
  projectUrls: string;
  bio: string | null;
  expectedTypeWork: number;
  targetWorkCity: string | null;
  expectedContractType: number;
  expectedSalary: number | null;
  canTakeApprenticeship: boolean;
  monthsOfCommercialExp: number;
  education: string | null;
  workExperience: string | null;
  courses: string | null;
  isActive: boolean;
  status: StudentStatus;
  user: UserEntity;
}
*/

const UserProfile = () => {
  const [data, setData] = useState<StudentEntity>(StudentStartData);
  const [edit, setEdit] = useState<boolean>(true);

  const router=useRouter()



  useEffect(() => {

      if(router.query.id) {
          fetch(`http://localhost:3001/student/${router.query.id}`)
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
  }, [router.query.id]);

  const send=()=>{
      console.log("finalna data kurwa zmienina",data)
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
