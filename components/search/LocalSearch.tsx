"use client";

import { usePathname, useRouter } from "next/navigation";
import { useQueryState } from "nuqs";

import { Input } from "@/components/ui/input";
import SearchIcon from "../icons/SearchIcon";

interface Props {
  route: string;
  placeholder: string;
  otherClasses?: string;
  iconPosition?: "left" | "right";
}

const LocalSearch = ({ route, placeholder, otherClasses, iconPosition = "left" }: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  const [query, setQuery] = useQueryState("query", {
    defaultValue: "",
    throttleMs: 300,
    shallow: false,
    clearOnDefault: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (pathname === route) setQuery(newValue);
    else if (newValue !== "") router.push(`${route}?query=${newValue}`);
  };

  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      {iconPosition === "left" && <SearchIcon className="cursor-pointer text-[#F5C87A] dark:text-[#C96F5F]" />}

      <Input
        type="text"
        placeholder={placeholder}
        value={pathname === route ? query || "" : undefined}
        onChange={handleChange}
        className="paragraph-regular background-light800_darkgradient no-focus w-full border-none shadow-none outline-none text-shadow-amber-950 placeholder:text-amber-900 dark:text-white dark:placeholder:text-white"
      />

      {iconPosition === "right" && <SearchIcon className="dark:text-logo-primary text-logo-secondary cursor-pointer" />}
    </div>
  );
};

export default LocalSearch;
