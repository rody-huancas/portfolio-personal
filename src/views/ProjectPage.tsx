import { CardProject } from "@components";

export const ProjectPage = () => {
  return (
    <>
      <div className="h-full p-10 flex flex-col gap-7 overflow-y-scroll text-gray-700 scrollable">
        <h2 className="font-black text-3xl title__page font__poppins">
          Mis Proyectos
        </h2>

        <div className="grid__projects">
          <CardProject
            image="https://i.postimg.cc/6qsTpYkj/ecommerce.gif"
            name="Ecommerce Datec"
            github=""
            project="https://datec-ecommerce.netlify.app/"
            technologies={["AÚN ESTÁ EN EN DESARROLLO"]}
          />
          <CardProject
            image="https://i.postimg.cc/8C8FrJGX/Trail-Flix.gif"
            name="TrailFlix"
            github="https://github.com/rody-huancas/PAF-react-redux-tmdb"
            project="https://rody-trailflix-react.netlify.app/"
            technologies={[
              "Javascript",
              "React",
              "Tailwind",
              "Css",
              "Redux Toolkit",
              "Axios",
            ]}
          />
          <CardProject
            image="https://i.postimg.cc/XJ6DqXF3/buscador-bebidas.gif"
            name="Buscador de Bebidas"
            github="https://github.com/rody-huancas/react-search-drinks"
            project="https://rody-search-drinks.netlify.app/"
            technologies={["JavaScript", "React", "React Bootstrap", "Axios"]}
          />
          <CardProject
            image="https://i.postimg.cc/YS20s479/filtrado.gif"
            name="Filtrado de Productos"
            github="https://github.com/rody-huancas/Filter-products"
            project="https://rodyhuancas.000webhostapp.com/Filter_products/"
            technologies={[
              "Php",
              "JavaScript",
              "Css",
              "Bootstrap",
              "JQuery",
              "MySQL",
            ]}
          />
          <CardProject
            image="https://i.postimg.cc/fbNcpP9W/cotizador.png"
            name="Sistema Cotizador"
            github="https://github.com/rody-huancas/Quotation-system-php"
            project="https://rodyhuancas.000webhostapp.com/Quotation-system-php/"
            technologies={["Php", "JavaScript", "Bootstrap", "JQuery", "Ajax"]}
          />
        </div>
      </div>
    </>
  );
};
