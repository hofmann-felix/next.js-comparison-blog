import {Layout} from "../../components/layout";
import {Navigation} from "../../components/navigation";
import {getAllPostPaths, getPostData, PostData, PostsData} from "../../lib/posts";
import Head from "next/head";

export async function getStaticPaths() {
    const paths = getAllPostPaths()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }: { params: PostsData }) {
    const postData = await getPostData(params.path)
    return {
        props: {
            postData
        }
    }
}

export default function Post({ postData }: {postData: PostData}) {
    return (
        <Layout>
            <Head>
                <title>{postData.title} | Next.js Blog</title>
            </Head>
            <Navigation/>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}/>
        </Layout>
    )
}