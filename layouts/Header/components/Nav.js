import Image from 'next/image';
import Link from 'next/link';
import classes from './Nav.module.css';

const View = ({ menuActive }) => {
  const nav = [
    {
      title: 'About us',
      route: '/about-us',
    },
    {
      title: 'Client',
      route: '/client',
    },
    {
      title: 'Staff',
      route: '/staff',
    },
    {
      title: 'Contact',
      route: '/contact',
    },
  ];

  return (
    <nav
      className={menuActive ? classes.nav + ' ' + classes.active : classes.nav}
    >
      <ul className={classes['nav-list']}>
        {nav.map((item, i) => (
          <li className={classes['nav-list__item']} key={i}>
            <Link href={item.route}>
              <a className={classes['link-text']}>{item.title}</a>
            </Link>
          </li>
        ))}
        <li
          className={
            classes['nav-list__item'] + ' ' + classes['nav-list__item--flag']
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
