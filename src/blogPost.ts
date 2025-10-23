
// create a type alias
type BlogPost = {
    title: string;
    content: string;
    author: string;
    published: boolean;
    publishedDate?: string;  // make it optional
}

// create a blog post
const myPost: BlogPost = {
    title: 'learn typescript',
    content: 'Typescript is a good language for web',
    author: 'Hasan',
    published: true,
    publishedDate: '25-04-08'

}

// create a function to desplay blog post
function printPost(post: BlogPost) {
    console.log(`Title: ${post.title}`);
    console.log(`Description: ${post.content}`);
    console.log(`author: ${post.author}`);
    console.log(`published: ${post.published}`);

    if (post.publishedDate) {
        console.log(`publishedDate: ${post.publishedDate}`);
    }

}

printPost(myPost);