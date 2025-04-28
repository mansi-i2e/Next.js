import { Metadata } from "next";

export const metadata = {
    // title: "Blog"
    title: {
        absolute: "Blog"  // template title ignored
    }
}

export default function Blog() {
    return (
        <h1>My Blog</h1>
    )
}