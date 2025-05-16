import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { navigationLinks } from "../../utils/content";
import CaretUp from "../Icons/CaretUp";
import Close from "../Icons/Close";
import MobileDropdown from "./MobileMenuDropdown";
import { useMenuContext } from "../../context/MobileMenuConext";

export default function MobileMenu() {
  const [activeLinkId, setActiveLinkId] = useState<number>(-1);
  const { menuOpened } = useMenuContext();

  return (
    <motion.div
      animate={menuOpened ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, display: "none" },
        visible: { opacity: 1, display: "flex" },
      }}
      transition={{
        duration: 0.25,
      }}
      className="fixed top-0 right-0 bottom-0 left-0 hidden justify-end bg-white/30 pl-30"
    >
      <motion.nav
        animate={menuOpened ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, x: "100%" },
          visible: { opacity: 1, x: "0%" },
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className="flex h-full w-full max-w-96 min-w-65 flex-col items-start gap-y-18 bg-white p-6 pl-7"
      >
        <Close />
        <motion.ul
          animate={menuOpened ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, x: "100%" },
            visible: { opacity: 1, x: "0%" },
          }}
          transition={{
            ease: "easeOut",
            delay: 0.05,
          }}
          className="flex flex-col gap-y-8"
        >
          {navigationLinks.map((link) => (
            <li
              key={link.id}
              className={`group 5 relative flex flex-col font-medium transition-all duration-300 ease-in-out ${activeLinkId === link.id ? "gap-y-6" : "gap-y-0"}`}
              onClick={() =>
                setActiveLinkId(activeLinkId === link.id ? -1 : link.id)
              }
            >
              <div className="flex cursor-pointer items-center gap-x-1.75">
                <a
                  className={`text-grey-600 ${activeLinkId === link.id ? "text-black" : ""}`}
                  href="#"
                >
                  {link.text}
                </a>
                {link.dropdown && (
                  <span
                    className={`flex size-6 items-center justify-center transition-all duration-200 ${link.id === activeLinkId ? "rotate-180" : ""}`}
                  >
                    <CaretUp className="fill-grey-600 size-3.5 rotate-180 transition-all duration-200" />
                  </span>
                )}
              </div>
              <AnimatePresence>
                {link.dropdown && activeLinkId === link.id && (
                  <MobileDropdown links={link.dropdownLinks} />
                )}
              </AnimatePresence>
            </li>
          ))}
        </motion.ul>
        <button className="bg-primary-700 hover:bg-primary-800 cursor-pointer rounded-[.625rem] px-8 py-3 font-medium text-white transition-all duration-200">
          Join Now
        </button>
      </motion.nav>
    </motion.div>
  );
}
