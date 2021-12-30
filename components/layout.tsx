import styled from "styled-components";
import React from "react";

const StyledLayout = styled.div`
  max-width: 720px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`

interface LayoutProps {
    children: React.ReactNode | React.ReactNode[]
}

export const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <StyledLayout>
            {children}
        </StyledLayout>
    )
}