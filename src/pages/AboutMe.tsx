export function AboutMe() {
  return (
    <section className="grow bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:-mx-6 lg:flex lg:items-center">
          <img
            className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
            src="https://wallpaperaccess.com/full/2987485.png"
            alt=""
          />

          <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
            <p className="text-5xl font-semibold text-blue-500 ">“</p>

            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
              Desarrollador de software | .NET | Node | React |
            </h1>

            <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
              Tecnólogo en Análisis y Desarrollo de Software, enfocado
              principalmente en desarrollo backend con C#, .NET, Node.js y
              TypeScript. Experiencia en construcción de APIs REST, integración
              de servicios externos, autenticación y manejo de bases de datos
              como SQL Server y PostgreSQL. <br />
              También cuento con conocimientos en React y TypeScript para el
              desarrollo de la lógica y funcionalidad del frontend, incluyendo
              consumo de APIs, rutas, guards, formularios y orquestación de
              flujos. Mi fortaleza está en la parte funcional y de integración,
              mientras que para diseño y maquetación suelo apoyarme en
              plantillas y componentes existentes. <br />
              Me caracterizo por el aprendizaje continuo, la resolución de
              problemas y la construcción de soluciones mantenibles y orientadas
              a resultados.
            </p>

            <h3 className="mt-6 text-lg font-medium text-blue-500">
              Crisitian Camilo Rodriguez
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Marketing Manager at Stech
            </p>

            <div className="flex items-center justify-between mt-12 lg:justify-start">
              <button
                title="left arrow"
                className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                title="right arrow"
                className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
