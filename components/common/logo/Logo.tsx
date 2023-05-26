import Image from "next/image";

export const Logo = () => {
  return (
    <Image data-test={"logo"} src="/images/logo.png" height="55" width="89" alt="Megalogo"/>
  )
}