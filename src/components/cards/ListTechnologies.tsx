interface Props {
  technologies: string[];
}

export const ListTechnologies = ({ technologies }: Props) => {
  const hasTechnologies = technologies.length > 0;

  return (
    <div className="flex flex-wrap justify-center gap-2 px-5">
      {technologies.map(
        (technology, index) =>
          technology && (
            <span
              key={index}
              className="bg-tertiary-100 text-xs py-1 px-2 rounded"
            >
              {technology}
            </span>
          )
      )}
    </div>
  );
};
