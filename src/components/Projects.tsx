import { ProjectsCard } from "@/components/ProjectCard";
import { about_me } from "@/lib/me";

export const Projects = () => {
    return (
        <>
            <p className="font-bold text-2xl">Aqui estão alguns dos meus projetos</p>
            <div className="flex flex-wrap gap-2 p-3 justify-center">
                {about_me.projetos.map(({title, description, link}, index) => {
                    return(
                        <ProjectsCard key={index} title={title} description={description} link={link}/>
                    )
                })}
            </div>
        </>
    )
}