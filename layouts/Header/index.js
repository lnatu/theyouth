import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from 'styles/layouts';
import { Flex } from 'styles/components/Layouts';
import Nav from 'layouts/Header/components/Nav';

import classes from './components/Nav.module.css';

const View = () => {
  const [menuActive, setMenuActive] = useState(false);

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

          <div
            onClick={() => setMenuActive(!menuActive)}
            className={
              menuActive
                ? classes.hamburger + ' ' + classes.active
                : classes.hamburger
            }
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <Nav menuActive={menuActive} />
        </Flex>
      </Header>
    </>
  );
};

export default View;
