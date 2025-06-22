import Head from "next/head";
import { useRouter } from "next/router";

export default function ProjectSlug() {
    const router = useRouter();
    const { slug } = router.query; // ✅ Get slug from the URL

    return (
        <>
            <Head>
                <title>{slug}</title>
            </Head>

            <div className="projectslug">
                <h1>Project: {slug}</h1>
                {/* Add your dynamic content here */}
            </div>
        </>
    );
}
