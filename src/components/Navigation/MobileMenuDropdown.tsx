import { motion } from "motion/react";
import { NavigationLink } from "../../utils/contentTypes";

interface MobileDropdownProps {
  links: NavigationLink[] | undefined;
}

export default function MobileDropdown(props: MobileDropdownProps) {
  return (
    <motion.ul
      exit={{ height: 0, opacity: 0 }}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="z-10 flex flex-col gap-y-6 overflow-hidden pl-3"
    >
      {props.links?.map((link) => (
        <motion.li className="text-grey-600" key={link.id}>
          <a href="#">{link.text}</a>
        </motion.li>
      ))}
    </motion.ul>
  );
}
