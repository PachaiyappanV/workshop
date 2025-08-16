import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.png" alt="Logo" width={36} height={36} />
    </Link>
  );
};
export default Logo;
