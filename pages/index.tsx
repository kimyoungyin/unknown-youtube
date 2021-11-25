import Link from "next/link";

const HomePage = () => {
    return (
        <div>
            <h1 className="sm:container bg-red-900">hello This is HomePage</h1>
            <Link href="/video">to video</Link>
        </div>
    );
};

export default HomePage;
