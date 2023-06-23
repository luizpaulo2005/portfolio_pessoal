import {about_me} from "@/lib/me";

export const About = () => {
    return (
        <div className="flex flex-col justify-center w-full lg:w-1/3 text-xl">
            <p className="text-justify">
                Me chamo {about_me.nome}, tenho {about_me.idade} anos, sou de {about_me.local}, desde pequeno
                sempre gostei de tecnologia, desde então fui sempre buscando formas de me aperfeiçoar nessa área.
            </p>
            <p className="text-justify">
                Quando terminei o fundamental decidi iniciar o Ensino Médio no {about_me.escolaridade[0].instituicao},
                que possuía o curso técnico em Informática, onde pude aprender mais sobre programação,
                redes, banco de dados, entre outros. Após terminar o Ensino Médio, decidi continuar no IFMS, entrando no
                Curso Superior de Análise e Desenvolvimento de Sistemas, onde estou atualmente.
            </p>
        </div>
    )
}