import { Layout } from 'components/Layout';
import { usePeople } from 'hooks/usePeople';

export const Home = () => {
  const { data } = usePeople();

  console.log(data);

  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  );
};
