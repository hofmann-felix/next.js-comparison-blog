import styled from "styled-components";
import Link from "next/link";



const StyledNav = styled.nav`
  background: lightgrey;
  border-radius: 4px;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  text-align: center;
  padding: 4px 8px;
  margin: 0 -8px;
`

const SiteTitle = styled.h1`
  width: 100%;
  text-align: center;
  color: #0070f3;
`

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
  
  &:hover {
    color: #0070f3;
  }
`

export const Navigation = () => {
    return (
        <>
            <SiteTitle>Next.js Blog</SiteTitle>
            <StyledNav>
                <Link href={'/'} passHref><StyledLink>Home</StyledLink></Link>
                <Link href={'/blog'} passHref><StyledLink>Blog</StyledLink></Link>
                <StyledLink href='https://github.com/hofmann-felix/next.js-comparison-blog'
                            target='_blank'>GitHub</StyledLink>
                <StyledLink href='https://nextjs.org/' target='_blank'>nextjs.org</StyledLink>
            </StyledNav>
        </>
    )
}