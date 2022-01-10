import type {NextPage} from 'next'
import {Layout} from "../components/layout";
import {Navigation} from "../components/navigation";
import Head from "next/head";
import styled from "styled-components";

const ExternalLink = styled.a`
  color: #0070f3;
  text-decoration: none;
  
  &:hover{
    text-decoration: underline;
  }
`

const Home: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Next.js Blog</title>
            </Head>
            <Navigation/>
            <h1>Next.js Comparison Blog</h1>
            <p>This is a simple blog application to show the differences between Gatsby, Next.js and Remix. You can find
                a detailed description and the other blog applications in <ExternalLink href='#'>this
                    article</ExternalLink> about the project.</p>
        </Layout>
    );
}

export default Home
