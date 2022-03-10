import React from "react";
import { observer } from "mobx-react";
import styled from "styled-components";
import { RiArrowRightSFill } from "react-icons/ri";

import postDetailStore from "@/stores/postDetailStore";

const PostDetailDescription: React.FC = () => {
  const { postDetail } = postDetailStore;

  if (postDetail === null) {
    return null;
  }

  const { description } = postDetail;

  return (
    <Container data-testid="post-description">
      <IconWrapper>
        <RiArrowRightSFill />
      </IconWrapper>
      <Description>{description}</Description>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  width: 100%;
  margin-bottom: 4.5rem;
  padding: 1.2rem 1.2rem 1.2rem 0.575rem;
  background-color: ${({ theme }) => theme.colors.bgBlack};
  box-shadow: 0px 8px 16px 0px ${({ theme }) => theme.colors.boxShadow};
  border-radius: 8px;
  text-align: left;
`;

const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.ftWhite};
  word-break: keep-all;
`;

const IconWrapper = styled.div`
  margin-right: 0.275rem;
  color: ${({ theme }) => theme.colors.ftWhite};
  background-color: transparent;
  line-height: 0;

  & > svg {
    font-size: 1.3rem;
  }
`;

export default observer(PostDetailDescription);
