import Link from 'next/link';

export default function FirstPost() {
    return (
        <div className="container">
            <h1>First Post</h1>
            <h1 className="title">
                Go Back <Link href="/posts/first-post">Home</Link>
            </h1>
        </div>
    );
}
