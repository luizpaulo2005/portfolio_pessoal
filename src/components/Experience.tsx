import { about_me } from "@/lib/me";

export const Experience = () => {
    return (
        <div className="flex flex-col flex-wrap gap-2">
            <p className="text-center font-bold text-xl">Experiências</p>
            <div className="flex flex-row justify-center gap-4 flex-wrap">
                {about_me.experiencias.map(({tipo, local, atividades}, i)=>{
                    return (
                        <div key={i} className="border rounded-md p-3 max-w-screen lg:w-1/3">
                            <p>Tipo: {tipo}</p>
                            <p>Local: {local}</p>
                            <p>Atividades: {atividades.map((atividade)=>{
                                return atividade + ", "
                            })}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}