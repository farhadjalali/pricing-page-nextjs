import styled from "styled-components";

const Page = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  position: absolute;
`;

const Home: React.FC = () => {
  return (
    <Page>
      <a href="/pricing">Go to pricing page</a>
    </Page>
  );
};

export default Home;
