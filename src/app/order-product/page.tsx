"use client"
import { useRouter } from "next/navigation"

export default function OrderProd() {
    const router = useRouter()
    const handleClick = () => {
        console.log("Placed your order")
        // router.push("/")
        // router.replace("/")
        // router.back()
        router.forward()
    }
    return (
        <>
            <h1>Order product</h1>
            <button onClick={handleClick}>Place order
            </button>
        </>
    )
}