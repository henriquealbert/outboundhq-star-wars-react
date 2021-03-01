import { Footer } from './Footer';
import { Header } from './Header';
import GithubCorner from 'react-github-corner';

export const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <main className="container">{children}</main>
      <Footer />
      <GithubCorner
        href="https://github.com/henriquealbert/outboundhq-star-wars-react"
        bannerColor="#E6B13B"
        octoColor="#2D3748"
        size={80}
        direction="right"
        target="_blank"
        rel="noreferrer"
      />
    </div>
  );
};
