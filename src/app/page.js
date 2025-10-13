import ParallaxHero from "../components/ParallaxHero";
import Image from "next/image";

export default function HomePage() {
    return (
        <main className="relative w-full min-h-screen select-none">
            <ParallaxHero />
        </main>
    );
}
