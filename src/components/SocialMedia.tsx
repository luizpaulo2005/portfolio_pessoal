import {about_me} from "@/lib/me";
import Image from "next/image";

export const SocialMedia = () => {
    return (
        <>
            <div className="flex flex-row flex-wrap justify-center gap-4 items-center">
                <Image src={`${about_me.redes_sociais[0].link}.png`} alt={about_me.redes_sociais[0].link} width={90} height={90} quality={100} className="rounded-lg"/>
                <p className="text-2xl font-semibold text-center">
                    Aqui está meu GitHub onde deixo alguns projetos, meu LinkedIn e meu currículo
                </p>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-4">
                {about_me.redes_sociais.map(({nome, link}, i)=>{
                    return (
                        <a href={link} target="_blank" rel="noreferrer" key={i} className="border rounded-md px-4 py-2 transition-colors hover:bg-zinc-300 hover:text-black">
                            {nome}
                        </a>
                    )
                })}

                <a href="/curriculo.pdf" download className="border rounded-md px-4 py-2 transition-colors hover:bg-zinc-300 hover:text-black">Currículo</a>

            </div>

            <div className="flex flex-col flex-wrap justify-center gap-4">
                <p className="text-2xl font-semibold text-center">Contato</p>
                <div className="flex flex-row flex-wrap justify-center gap-4">
                    {about_me.contato.map(({tipo, content}, i) => {
                        return (
                            <div key={i} className="border rounded-md p-4">
                                <p>{tipo}: {content}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}