import React from "react";
import Title from "./Title";

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <Title>{title}</Title>
      <div className="py-4">{children}</div>
    </section>
  );
}

export default Panel;
