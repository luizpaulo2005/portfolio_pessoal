interface ProjectsCardProps {
    title: string;
    description: string;
    link: string;
}

export const ProjectsCard = (props: ProjectsCardProps) => {
    return (
        <div className="w-full sm:w-72 px-4 py-3 border rounded-md flex flex-col relative">
            <h1 className="text-center text-lg font-bold">{props.title}</h1>
            <p className="text-justify text-sm mb-5">{props.description}</p>
            <a href={props.link} target="_blank" rel="noreferrer" className="self-end absolute right-3 bottom-3">Ver mais</a>
        </div>
    )
}