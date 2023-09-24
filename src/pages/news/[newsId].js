import { useRouter } from "next/router";


const NewsDetailsPage = () => {
    const route = useRouter();
    return (
        <div>
            this is news details page by id : {route.query.newsId}
        </div>
    );
};

export default NewsDetailsPage;