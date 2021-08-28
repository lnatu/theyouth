import { useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import classes from './Nav.module.css';

const View = ({ menuActive, setMenuActive }) => {
  const nav = [
    {
      title: 'About us',
      route: '/about-us',
      target: 'about-us',
    },
    {
      title: 'Client',
      route: '/client',
      target: 'client',
    },
    {
      title: 'Staff',
      route: '/staff',
      target: 'staff',
    },
    {
      title: 'Contact',
      route: '/contact',
      target: 'contact',
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
  }, []);

  const scrollTo = (e) => {
    e.preventDefault();
    setMenuActive(false);
    const targetSection = e.target.dataset.target;
    const targetOffset = document.querySelector(`.${targetSection}`).offsetTop;

    gsap.to(window, {
      duration: 3,
      scrollTo: { y: targetOffset },
      ease: 'power4.out',
    });
  };

  return (
    <nav
      className={
        menuActive
          ? classes.nav + ' overflow-hidden ' + classes.active
          : classes.nav + ' overflow-hidden '
      }
    >
      <ul className={classes['nav-list']}>
        {nav.map((item, i) => (
          <li className={classes['nav-list__item'] + ' slide-up-skew'} key={i}>
            <a
              href="#"
              className={classes['link-text']}
              data-text={item.title}
              data-target={item.target}
              onClick={scrollTo}
            >
              {item.title}
            </a>
          </li>
        ))}
        <li
          className={
            classes['nav-list__item'] +
            ' slide-up-skew ' +
            classes['nav-list__item--flag']
          }
        >
          <Image
            src="/static/images/icons/flag-vi.svg"
            width={48}
            height={32}
            objectFit="cover"
            quality={100}
            alt="FLAG EN"
          />
        </li>
      </ul>
    </nav>
  );
};

export default View;
