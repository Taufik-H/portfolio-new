import React from "react";
import { EmptyState } from "./ui/enpty-state";

const About = ({ username }: { username: string }) => {
  return (
    <EmptyState
      currentUser={username}
      title="No About yet!"
      description="I am Sorry..."
      action={{
        label: "Create Project",
        href: "#",
      }}
    />
  );
};

export default About;
