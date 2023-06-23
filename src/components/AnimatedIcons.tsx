'use client'

import { Fade } from "react-awesome-reveal";
import Image from "next/image";

import ReactIcon from "../assets/react.png"
import NextIcon from "../assets/next.png"
import NestIcon from "../assets/nest.png"
import TailwindIcon from "../assets/tailwind.png"
import PrismaIcon from "../assets/prisma.png"
import ExpressIcon from "../assets/express.png"
import ExpoIcon from "../assets/expo.svg"

export const AnimatedIcons = () => {
    return (
        <div className="flex flex-wrap justify-center items-center gap-2">
            <Fade cascade damping={0.4} direction="left">
                <Image src={ReactIcon} alt="React Icon" className="bg-white rounded-md w-20 p-2"/>
                <Image src={NextIcon} alt="Next Icon" className="bg-white rounded-md w-20 p-2"/>
                <Image src={NestIcon} alt="Nest Icon" className="bg-white rounded-md w-20 p-2"/>
                <Image src={TailwindIcon} alt="Tailwind Icon" className="bg-white rounded-md w-20 p-2"/>
                <Image src={PrismaIcon} alt="Prisma Icon" className="bg-white rounded-md w-20 p-2"/>
                <Image src={ExpressIcon} alt="Express Icon" className="bg-white rounded-md w-40 p-2"/>
                <Image src={ExpoIcon} alt="Expo Icon" className="bg-white rounded-md w-20 p-2"/>
            </Fade>
        </div>
    )
}