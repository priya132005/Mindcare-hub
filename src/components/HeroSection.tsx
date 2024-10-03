import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
function HeroSection(){
    return (
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <Spotlight
        className="left-0 -top-40 md:left-60 md:-top-20"
        fill="white"
      />
            <div className="relative z-10 w-full p-4 text-center">

                <h1 className="mt-20 text-4xl font-bold text-transparent md:mt-0 md:text-7xl bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400"><b>Welcome</b> to<i>Mindcare hub</i> </h1>
                <p className="max-w-lg mx-auto mt-4 text-base font-normal md:text-lg text-neutral-300">
                Mental Health Awareness and Support is an online platform dedicated to providing education, resources, and community support for individuals struggling with mental health challenges like anxiety, depression, and stress. The site offers self-help tools, guided meditations, expert Q&A sessions, mood trackers, and forums for peer interaction.</p>
                <div className="mt-4">
                    <Link href={"/courses"}>
                    <Button borderRadius="1.75rem" className="text-black bg-white dark:bg-black dark:text-white border-neutral-200 dark:border-slate-800">Explore resourses</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default HeroSection;