import Image from "next/image";
import Link from "next/link";
import { Header } from "styles/layouts";
import { Flex } from "styles/components/Layouts";
import Nav from "layouts/Header/components/Nav";

const View = () => {
  return (
    <>
      <Header>
        <Flex items="center" content="space-between">
          <Link href="/">
            <a>
              <Image
                src="/static/images/logo.svg"
                width={216}
                height={63}
                objectFit="cover"
                quality={100}
                alt="DTS Logo"
              />
            </a>
          </Link>

          <Nav />
        </Flex>
      </Header>
    </>
  );
};

export default View;
