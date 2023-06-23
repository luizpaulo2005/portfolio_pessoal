import { about_me } from "@/lib/me";

export const Escolaridade = () => {
    return (
        <div className="flex flex-col flex-wrap gap-2">
            <p className="text-center font-bold text-xl">Escolaridade</p>
            <div className="flex flex-row flex-wrap justify-center gap-4">
                {about_me.escolaridade.map(({instituicao, curso, ano_inicio, ano_fim, nivel}, i) => {
                    return (
                        <div key={i} className="border rounded-md p-3 max-w-screen lg:w-1/3">
                            <p>Instituição: {instituicao}</p>
                            <p>Curso: {curso}</p>
                            <p>Período: {ano_inicio} - {ano_fim ? (`${ano_fim}`) : ("Até o momento")}</p>
                            <p>Nível: {nivel}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}