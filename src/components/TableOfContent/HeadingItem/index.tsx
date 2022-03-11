import React from "react";
import styled, { css } from "styled-components";
import { HashLink } from "react-router-hash-link";

import { Heading } from "..";
import { removeSpecialSymbols, space2Hyphen } from "@/utils/string";

type Props = {
  heading: Heading;
  active: boolean;
};

const HeadingItem: React.FC<Props> = ({ heading, active }) => {
  const { content, scale } = heading;

  const hashLinkPath = `#${space2Hyphen(removeSpecialSymbols(content)).trim()}`;

  return (
    <Item>
      <StyledHashLink smooth to={hashLinkPath} $active={active} $scale={scale}>
        {content}
      </StyledHashLink>
    </Item>
  );
};

const Item = styled.li``;

const StyledHashLink = styled(HashLink)<{ $active: boolean; $scale: number }>`
  display: inline-block;
  margin-left: ${(props) => `${props.$scale * 5}px`};
  font-size: 1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.ftGrayDark};
  text-decoration: none;
  transition: transform ease 0.2s;

  ${(props) =>
    props.$active &&
    css`
      transform: scale(1.05, 1.05);
      color: ${({ theme }) => theme.colors.ftGrayDark3};
    `}
`;

export default HeadingItem;
