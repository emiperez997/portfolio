import { useState } from "preact/hooks";
import data from "../data/data.json";

export function ProjectList() {
  const [slideIndex, setSlideIndex] = useState(0);

  const projects = [];
  return (
    <div class="flex flex-col items-center gap-5 w-full overflow-hidden justify-center">
      <div class="flex w-80 sm:w-[550px] justify-center items-center bg-teal-700 p-5 md:p-20 sm:rounded-xl text-white">
        {data.projects.map(
          (project, index) =>
            slideIndex === index && (
              <div class="flex flex-col gap-2 sm:gap-10">
                <div class="flex flex-col justify-center gap-2">
                  <h1 class="text-2xl font-bold text-center">
                    {project.title}
                  </h1>
                  <div class="flex justify-center">
                    <small class="text-center text-sm bg-teal-900 py-1 px-3 rounded-full">
                      {project.date}
                    </small>
                  </div>
                </div>
                <p class="text-lg font-thin">{project.description}</p>
                <div class="flex gap-5 justify-center items-center">
                  <a href={project.github} target="_blank">
                    <img
                      src="/contact/github.svg"
                      alt="Github Logo"
                      class="w-8 h-8"
                    />
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank">
                      <img
                        src="/contact/code.svg"
                        alt="External Link Logo"
                        class="w-8 h-8"
                      />
                    </a>
                  )}
                </div>
              </div>
            )
        )}
      </div>

      <div class="flex items-center gap-5">
        {data.projects.map((project, index) => (
          <span
            class={`h-5 w-5 rounded-full dots ${
              slideIndex === index
                ? "bg-orange-700 hover:bg-orange-600"
                : "bg-orange-900 hover:bg-orange-800"
            }`}
            onClick={() => {
              setSlideIndex(index);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}
