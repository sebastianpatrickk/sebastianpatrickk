import Link from "next/link";
import { ReactNode } from "react";

const LinkBadge = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  return (
    <span className="rounded-sm border border-zinc-200 bg-zinc-100 px-1.5 py-0.5 dark:border-none dark:bg-zinc-700/60">
      <Link href={href} target="_blank" rel="noreferrer">
        {children}
      </Link>
    </span>
  );
};

export default LinkBadge;
