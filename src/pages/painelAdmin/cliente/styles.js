import { Link } from "react-router-dom";
import styled from "styled-components";

export const TrashButton = styled.button`
  color: #f00;
  &:hover {
    color: #f00d6e;
  }
`;

export const NavLink = styled(Link)`
  color: #0000ff;
  &:hover {
    color: #4169e1;
  }
`;

export const Section = styled.section`
  background-color: var(--gray-100);
`;

export const Image = styled.img`
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
`;