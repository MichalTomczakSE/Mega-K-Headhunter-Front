import { useRouter } from "next/router";

export const LinkComponent = () => {
  const router = useRouter();

  const handleNavigation = async (href: string) => {
    try {
      await router.push(href);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="flex gap-x-14 ">
      <button
        className={`py-6 focus:border-b-[3px] focus:border-b-secondary-red ${
          router.asPath === "/dashboard/hr/availableStudents"
            ? "border-b-[3px] border-b-secondary-red"
            : ""
        }`}
        onClick={() => handleNavigation("/dashboard/hr/availableStudents")}
      >
        Dostępni kursanci
      </button>
      <button
        className={`py-6 focus:border-b-[3px] focus:border-b-secondary-red ${
          router.asPath === "/dashboard/hr/toTalk"
            ? "border-b-[3px] border-b-secondary-red"
            : ""
        }`}
        onClick={() => handleNavigation("/dashboard/hr/toTalk")}
      >
        Do rozmowy
      </button>
    </nav>
  );
};
