import styled from "styled-components";
import Image from "next/image";

const Page = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  position: absolute;
`;

const Home: React.FC = () => {
  return (
    <Page>
      <p>
        <Image src="/images/mina.jpeg" alt={""} width={32} height={32} />
        <br />
        You are currently visiting the Mina Office official website. We regret
        to inform you that we are no longer in business!
        <br />
        If you need any further information, you can contact us via email
        (we@minaoffice.com)
      </p>
    </Page>
  );
};

export default Home;
