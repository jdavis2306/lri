import Link from "next/link";
import { useRouter } from "next/router";
import { FC, MouseEvent, PropsWithChildren, useContext } from "react";
import { SaveChangesCtx } from "../../services/context/save-changes-ctx";
import type { LinkProps } from "next/dist/client/link";

type Props = { href: LinkProps["href"]; external?: false } | { href: string; external: true };

const SafeLink: FC<PropsWithChildren<Props>> = ({ href, external, children }) => {
  const { saveChangesPrompt } = useContext(SaveChangesCtx);
  const router = useRouter();

  const missingProtocol = external && !href.startsWith("http://") && !href.startsWith("https://");
  const externalUrl = external ? (missingProtocol ? "https://" + href : href) : "";

  function handleNav(e: MouseEvent) {
    e.preventDefault();
    saveChangesPrompt({
      onSuccessOrDiscard: () => {
        if (external) window.location.href = externalUrl;
        else router.push(href);
      },
    });
  }

  return external ? (
    <a href={externalUrl} onClick={handleNav}>
      {children}
    </a>
  ) : (
    <Link href={href} legacyBehavior>
      <a onClick={handleNav}>{children}</a>
    </Link>
  );
};

export default SafeLink;
