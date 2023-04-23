import {Inter} from 'next/font/google'
import Header from "@/components/common/Header";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            <Header/>
            <section className="bg-primary-background h-[100vh]"></section>
        </>
    )
}
