import {Hero} from "@/components/Hero";

import { AnimatedIcons } from "@/components/AnimatedIcons";
import { About } from "@/components/About";
import { Escolaridade } from "@/components/Escolaridade";
import { Projects } from "@/components/Projects";
import {Experience} from "@/components/Experience";
import {SocialMedia} from "@/components/SocialMedia";

const Home = () => {
    return (
        <div className="max-w-screen min-h-screen w-full flex flex-col p-8">
            <div className="flex flex-row justify-center p-4 flex-wrap">
                <div className="min-h-screen flex justify-center items-center w-full lg:w-3/4">
                    <Hero/>
                </div>
            </div>

            <div className="flex flex-wrap gap-8 justify-center">
                <About/>

                <div className="text-center text-2xl font-bold flex flex-col gap-2 w-full lg:w-1/2">
                    Possuo conhecimento sobre as seguintes bibliotecas:
                    <AnimatedIcons/>
                </div>
            </div>

            <div className="flex flex-col justify-center w-full text-center my-5">
                <Projects/>
            </div>

            <div className="flex flex-col">
                <p className="text-center font-bold text-3xl">Alguns extras sobre mim</p>
                <div className="flex flex-col justify-center gap-4">
                    <Escolaridade/>
                    <Experience/>
                    <SocialMedia/>
                </div>
            </div>
        </div>
    )
}

export default Home