import { Fragment } from 'react';
import Navigation from '../layout/navigation';

export default function Layout({ children }) {
  return (
    <Fragment>
      <Navigation />
      <main>{children}</main>
    </Fragment>
  );
}
