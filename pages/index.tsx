import type {NextPage} from 'next'
import {Layout} from "../components/layout";
import {Navigation} from "../components/navigation";
import Head from "next/head";

const Home: NextPage = () => {
    return (
            <Layout>
                <Head>
                    <title>Next.js Blog</title>
                </Head>
            <Navigation/>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </Layout>
    );
}

export default Home
