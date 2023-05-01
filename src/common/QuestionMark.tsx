import styled from "styled-components";
import Image from "next/image";

const Border = styled.div`
  border: 1px solid #bee1e5;
  border-radius: 50%;
  width: 26px;
  height: 26px;
  display: grid;
  align-items: center;
  justify-items: center;
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  color: #7a7998;

  :hover {
    background-color: ${({ theme }) => theme.colors.Primary};
    color: #fff;
    border: none;
  }
`;

export const QuestionMark = () => (
  <Border>
    <Image
      src="/images/question-mark.svg"
      alt="Question mark"
      width={6}
      height={10}
    />
  </Border>
);
