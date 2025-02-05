
import { getStaticProps } from 'next';

export default function BlogPost({ post }) {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}


export async function getStaticProps(context) {
    const res = await fetch('https://api.example.com/posts/1');
    const post = await res.json();

    return {
        props: {
            post,
        },
    };
}
