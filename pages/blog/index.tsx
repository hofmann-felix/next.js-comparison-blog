import Image from 'next/image'
import {Layout} from "../../components/layout";
import {Navigation} from "../../components/navigation";
import {getPostsData, PostsData} from "../../lib/posts";
import styled from "styled-components";
import Link from "next/link";
import Head from "next/head";

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
    text-decoration: underline;
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
            <Head>
                <title>Overview | Next.js Blog</title>
            </Head>
            <Navigation/>
            <h3>Blog Overview</h3>
            <Grid>
                {allPostsData.map(post => (
                    <Link key={post.path} href={'/blog/'+post.path} passHref>
                        <GridItem>
                            {post.imagePath && <Image objectFit="cover" layout="responsive" alt="" width={1920} height={1080} src={'/' + post.imagePath}/>}
                            <p>{post.title}</p>
                        </GridItem>
                    </Link>
                ))}
            </Grid>
        </Layout>
    );
}

export default Index
