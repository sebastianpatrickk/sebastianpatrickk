import LinkBadge from "@/components/LinkBadge";
import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProjectCard from "@/components/ProjectCard";

const PROJECTS = [
  {
    name: "Skateshop",
    description:
      "An open source e-commerce skateshop build with everything new in Next.js 13.",
    tech: "TypeScript",
    stars: 6,
    href: "https://skateshop.sadmn.com",
  },
  {
    name: "sebthepatrick",
    description:
      "An open source e-commerce skateshop build with everything new in Next.js 13.",
    tech: "TypeScript",
    stars: 1,
    href: "https://skateshop.sadmn.com",
  },
] as const;

const Home = () => {
  return (
    <MaxWidthWrapper>
      <section className="space-y-4">
        <p className="font-medium leading-7 text-zinc-800 dark:font-normal dark:text-zinc-50">
          {`I'm`} <span className="font-bold">Sebastian</span>, a junior
          software engineer building things for the web. I currently starting my
          freelancing journey on{" "}
          <LinkBadge aria-label="Cognosys" href="https://www.fiverr.com">
            Fiverr
          </LinkBadge>
          , a startup working on AI agents.
        </p>
        <p className="leading-7">
          I like building open-source projects. {`I'm`} now building{" "}
          <Link
            href="https://skateshop.sadmn.com"
            target="_blank"
            rel="noreferrer"
            className="no-underline"
          >
            Skateshop
          </Link>
          , an open-source e-commerce platform built with everything new in{" "}
          <LinkBadge aria-label="Next.js" href="https://nextjs.org/">
            Next.js
          </LinkBadge>
          . I also like skating, and playing video games.
        </p>
      </section>
      <section className="space-y-4">
        <Link href="">
          <h3 className="text-xl font-bold">Projects</h3>
        </Link>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              tech={project.tech}
              stars={project.stars}
              href={project.href}
            />
          ))}
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default Home;
