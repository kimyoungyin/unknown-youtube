import { useRouter } from "next/dist/client/router";

const Video = () => {
    const router = useRouter();

    return <div>This is ${router.query.id}</div>;
};

export default Video;
