import Link from "next/link";
import { SocialIcons } from "@/constants";

type SocialLinksProps = {
  containerStyles: string;
  iconStyles: string;
};

const SocialLinks = ({ containerStyles, iconStyles }: SocialLinksProps) => {
  return (
    <div className={containerStyles}>
      {SocialIcons.map((data, index) => (
        <Link
          key={index}
          href={data.path}
          className={iconStyles}
          target="_blank"
        >
          {<data.icon />}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
