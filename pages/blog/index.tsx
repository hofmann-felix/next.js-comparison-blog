
import Image from 'next/image'
import {Layout} from "../../components/layout";
import {Navigation} from "../../components/navigation";
import {getPostsData, PostsData} from "../../lib/posts";
import styled from "styled-components";
import Link from "next/link";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  justify-items: stretch;
  align-items: start;
`
const GridItem = styled.a`
  text-decoration: none;
  grid-column-start: span 12;
  color: black;
  overflow: hidden;

  @media (min-width: 600px) {
    grid-column-start: span 6;
  }

  &:hover {
    color: #0070f3;
  }
`

const StyledImg = styled(Image)`
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.03);
  }
`

export async function getStaticProps() {
    const allPostsData = getPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

const Index = ({allPostsData}: {allPostsData: PostsData[]}) => {

    return (
        <Layout>
            <Navigation/>
            <h3>Blog Overview</h3>
            <Grid>
                {allPostsData.map(post => (
                    <Link key={post.path} href={'/blog/'+post.path} passHref>
                        <GridItem>
                            <StyledImg width={1600} height={900} src='/images/how-to-optimize-gatsby-url-hero.jpeg'/>
                            <p>{post.title}</p>
                        </GridItem>
                    </Link>
                ))}
            </Grid>
        </Layout>
    );
}

export default Index
