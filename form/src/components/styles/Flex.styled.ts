import styled from "styled-components";

interface Props {
  lgDir?: string;
  gap?: string;
  smDir?: string;
}

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(p: Props) => p.lgDir};
  gap: ${(p: Props) => p.gap || "0px"};

  & > div,
  & > ul {
    flex: 1;
  }

  @media (max-width: ${({ theme }: any) => theme.mobile}) {
    flex-direction: ${(p: Props) => p.smDir};
    text-align: center;
  }
`;
