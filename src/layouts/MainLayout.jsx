import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <section className="flex flex-col min-h-screen bg-gradient-to-br from-slate-700 to-slate-500 text-emerald-500">
            <nav className="py-5 sticky top-0 z-10 backdrop-blur-xl shadow-md bg-black/30 ">
                <section className=" w-[90%] md:w-[80%] mx-auto">
                    <h1 className="text-3xl font-bold uppercase text-white">
                        <Link to={"/"}> Logo </Link>
                    </h1>
                </section>
            </nav>

            <main className="flex flex-1 w-full">
                <Outlet />
            </main>

            <footer className="text-lg font-medium text-center py-8 bg-slate-900 text-white">
                <p>
                    {" "}
                    Simple Quiz App <br /> Using{" "}
                    <Link
                        to={"https://opentdb.com"}
                        target="_blank"
                        className="text-sky-400 underline underline-offset-4"
                    >
                        Open Trivia DB
                    </Link>{" "}
                </p>
            </footer>
        </section>
    );
};

export default MainLayout;
