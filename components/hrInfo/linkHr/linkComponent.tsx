import Link from "next/link";

export const LinkComponent = () => {
  return (
    <ul className="flex gap-x-14 ">
      <li>
        <Link
          className="py-6 focus:border-b-[3px] focus:border-b-secondary-red "
          href="/dashboard/hr/availableStudents"
        >
          Dostępni kursanci
        </Link>
      </li>
      <li>
        <Link
          className=" py-6 focus:border-b-[3px] focus:border-b-secondary-red"
          href="/dashboard/hr/toTalk"
        >
          Do rozmowy
        </Link>
      </li>
    </ul>
  );
};
