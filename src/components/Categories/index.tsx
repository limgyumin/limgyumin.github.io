import React from "react";
import styled from "styled-components";

import categoryStore from "@/stores/categoryStore";

const Categories: React.FC = () => {
  const { categories } = categoryStore;

  if (categories === null) {
    return null;
  }

  return (
    <Container>
      {categories.map((category) => (
        <Category>{category}</Category>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const Category = styled.span`
  margin: 0 0.375rem 0.375rem 0;
  padding: 0.35rem 0.7rem;
  font-weight: 400;
  font-size: 0.75rem;
  border-radius: 2rem;
  letter-spacing: 1px;
  background-color: ${({ theme }) => theme.colors.bgBlack};
  color: ${({ theme }) => theme.colors.ftWhite};
`;

export default Categories;
