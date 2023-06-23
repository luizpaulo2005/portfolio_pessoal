'use client'

import {TypeAnimation} from "react-type-animation";

export const Hero = () => {
    return (
        <TypeAnimation sequence={
            ['Olá', 2000, 'Me chamo Luiz Paulo', 2000, 'Sou desenvolvedor full-stack', 2000]
        }
        repeat={Infinity}
        className="text-4xl font-bold text-center"
        speed={20}
        />
    )
}