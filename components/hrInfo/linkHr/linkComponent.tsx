import Link from "next/link";

export const LinkComponent = () => {
  return (
    <div>
      <ul className="flex gap-x-14 ">
        <li>
          <Link
            className="focus:border-b-[3px] focus:border-b-secondary-red"
            href="/dashboard/hr/available-students"
          >
            Dostępni kursanci
          </Link>
        </li>
        <li>
          <Link
            className=" focus:border-b-[3px] focus:border-b-secondary-red"
            href="/dashboard/hr/to-talk"
          >
            Do rozmowy
          </Link>
        </li>
      </ul>
    </div>
  );
};
