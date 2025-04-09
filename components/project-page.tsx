import React from "react";
import ProjectCard, { ProjectCardType } from "./project-card";
import { EmptyState } from "./ui/enpty-state";

const Project = ({
  projects,
  username,
}: {
  projects: [];
  username: string;
}) => {
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
          title="No project yet!"
          description="I am Sorry..."
          action={{
            label: "Create Project",
            href: "/u/project/create/",
          }}
        />
      )}
    </section>
  );
};

export default Project;
