import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface PostsData {
    path: string,
    title: string,
    imagePath?: string
}
export function getPostsData(): PostsData[] {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        return {
            path: id,
            title: matterResult.data.title,
            imagePath: matterResult.data.featuredImage
        }
    })
}

export function getAllPostPaths() {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map(fileName => {
        return {
            params: {
                path: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export interface PostData {
    path: string,
    title: string,
    contentHtml: string
}

export async function getPostData(id: string): Promise<PostData> {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // Combine the data with the id and contentHtml
    return {
        path: id,
        contentHtml,
        title: matterResult.data.title
    }
}