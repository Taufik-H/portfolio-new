import React from "react";
import ProjectCard, { ProjectCardType } from "./project-card";
import { EmptyState } from "./ui/enpty-state";

const Skills = ({ projects, username }: { projects: []; username: string }) => {
  return (
    <section>
      {projects.length > 0 ? (
        projects.map((project: ProjectCardType) => (
          <div
            key={project?._id}
            className="mt-7 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-5"
          >
            <ProjectCard post={project} />
          </div>
        ))
      ) : (
        <EmptyState
          currentUser={username}
          title="No skill yet!"
          description="I am Sorry..."
        />
      )}
    </section>
  );
};

export default Skills;
