import { Galery } from "./Galery";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MyProjects } from "./MyProjects";
import { Navbar } from "./Navbar";

export function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <MyProjects />
            <Galery />            
            <Footer />
        </>
    );
}

