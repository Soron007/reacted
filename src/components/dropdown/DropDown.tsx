import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./dropdown.css";
import { useEffect, useRef, useState } from "react";

type Props = {
  content: React.ReactNode;
  open: boolean;
  setOpen: (value: boolean) => void;
  stars: number;
};

const DropDown = ({ content, open, setOpen, stars }: Props) => {
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [dropDownTop, setDropdownTop] = useState<number | null>(0);
  const toggleDropdown = () => {
    if (!open && buttonRef.current && contentRef.current) {
      const spaceRemaing =
        window.innerHeight - buttonRef.current?.getBoundingClientRect().bottom;

      const contentHeight = contentRef.current?.clientHeight;

      const topPosition =
        spaceRemaing > contentHeight ? null : spaceRemaing - contentHeight;

      setDropdownTop(topPosition);
    }

    setOpen(!open);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, [dropDownRef]);

  return (
    <div className="dropdown" ref={dropDownRef}>
      <div
        className={`dropdown-btn ${open ? "button-open" : null}`}
        onClick={toggleDropdown}
        ref={buttonRef}
      >
        {`${stars} stars`}
        <span className="toggle-icon">
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>

      <div
        className={`dropdown-content ${open ? "content-open" : null}`}
        ref={contentRef}
        style={{ top: top ? `${dropDownTop}px` : "100%" }}
      >
        {content}
      </div>
    </div>
  );
};

export default DropDown;
