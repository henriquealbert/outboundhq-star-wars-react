import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
};
