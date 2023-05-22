import { Container } from "@/components/common/container/Container";
import { Logo } from "@/components/common/logo/Logo";
import Link from "next/link";
import { GoBack } from "@/components/common/goBack/goBack";

export const NotFound = () => {
  return (
    <Container>
      <Logo />
      <h2 className=" text-2xl py-2">Not found</h2>
      <GoBack />
      <Link href={"/"} className=" py-4 text-2xl underline">
        Przejdź do strony logowania
      </Link>
    </Container>
  );
};