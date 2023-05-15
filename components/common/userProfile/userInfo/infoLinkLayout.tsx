import { LinkComponent } from "./linkComponent";
import { Dispatch, SetStateAction, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Button } from "@/components/common/Button";
import { StudentEntity } from "@/interfaces/student/student";

interface DetailsInterface {
  name: string;
  description?: string;
  elements?: JSX.Element[];
  edit?: boolean;
  setData?: Dispatch<SetStateAction<StudentEntity>>;
  data?: StudentEntity;
  register?: UseFormRegisterReturn<string>;
  id?: string;
}

export const InfoLinkLayout = ({
  id,
  setData,
  edit,
  name,
  description,
}: DetailsInterface) => {

  const [url,setUrl]=useState<string>("")


  const links = description ? description.split(",") : [];


  const deleteUrl = (url: string) => {
    const array = links.filter((item) => item != url);
    if (setData && id) {
      setData((prevState) => ({ ...prevState, [id]: array.toString() }));
    }
  };

  const addUrl=()=>{
    links.push(url)
    setUrl("")
    if (setData && id) {
      setData((prevState) => ({ ...prevState, [id]: links.toString() }));
    }
  }



  return (
    <div className={"flex w-full flex-col"}>
      <div
        className={
          "h-14 p-5 flex justify-start text-lg text-light-primary-text items-center bg-secondary-background"
        }
      >
        <span className={"font-semibold"}>{name}</span>
      </div>
      {description && (
        <span>
          {typeof links == "object"
            ? links.map((url, index) => (
                <div key={index} className={"flex flex-row"}>
                  <LinkComponent  url={url} />
                  {edit===false ? (
                    <Button onClick={() => deleteUrl(url)}>Usuń</Button>
                  ) : null}
                </div>
              ))
            : ""}
        </span>
      )}
      {edit===false ? (
          <div>
            <input
                type={"text"}
                className={
                  "bg-primary-background h-full border-secondary-background border-2"
                }
                value={url}
                onChange={(e)=>setUrl(e.target.value)}
            />
            <Button onClick={()=>addUrl()}>Dodaj</Button>
          </div>
      ) : null}
    </div>
  );
};
