import { DotFilledIcon, StarIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const ProjectCard = ({
  href,
  name,
  tech,
  description,
  stars,
}: {
  href: string;
  name: string;
  tech: string;
  description: string;
  stars: number;
}) => {
  return (
    <Link className="" href={href}>
      <div className="flex h-full flex-col rounded-xl border bg-card text-card-foreground shadow">
        <div className="space-0.5-1 flex flex-1 flex-col p-6">
          <div className="space-y-1">
            <h3 className="line-clamp-1 font-semibold leading-none tracking-tight">
              {name}
            </h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {description}
            </p>
          </div>
        </div>
        <div className="p-6 pt-0">
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <DotFilledIcon className="h-8 w-8 text-blue-500" />
              <p className="">{tech}</p>
            </div>
            <div className="flex items-center gap-2">
              <StarIcon />
              <p>{stars}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
