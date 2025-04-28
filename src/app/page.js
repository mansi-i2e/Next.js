import Link from "next/link"

export default function Home() {
    return <>
        <h1>Welcome home!</h1> 
        <Link href="/blog">Explore Blogs</Link>
        <br/>
        <Link href="/products">Look into Products</Link>
        </>
}