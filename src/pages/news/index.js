import RootLayout from "@/components/Layouts/RootLayout";
import { Button } from "antd";
import Link from "next/link";

const NewsPage = () => {
    return (
        <div>
            this is news page <br />

            <Button type="primary" className="m-4">
                <Link href="/">back to home</Link>
            </Button>
        </div>
    );
};

export default NewsPage;

NewsPage.getLayout = function getLayout(page) {
    return (
        <RootLayout>{page}</RootLayout>
    )
}