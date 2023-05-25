import { Button } from "@/components/common/Button";
import {Container} from "@/components/common/container/Container"
import Link from "next/link";
import { Logo } from "@/components/common/logo/Logo";

export default function Home() {
    return ( <>
        <Container>
          <Logo />
          <Link data-test={"main-page-link"} href={"auth/login"} className=" py-4 text-2xl underline">
            <Button >Zaloguj się</Button>
          </Link>
        </Container>
    </>
    )
}
