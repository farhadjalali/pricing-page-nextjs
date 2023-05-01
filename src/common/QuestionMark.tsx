import styled from "styled-components";

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
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.88232 9.88215C9.88253 8.80528 10.6909 7.90004 11.7609 7.77845C12.8309 7.65686 13.8217 8.35764 14.0635 9.40701C14.3054 10.4564 13.7211 11.5201 12.7059 11.8791C12.2826 12.0287 11.9997 12.429 12 12.8779V13.588"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0001 15.7058C11.8539 15.7058 11.7354 15.8243 11.7354 15.9705C11.7354 16.1167 11.8539 16.2352 12.0001 16.2352C12.1463 16.2352 12.2648 16.1167 12.2648 15.9705C12.2648 15.8243 12.1463 15.7058 12.0001 15.7058V15.7058"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Border>
);
