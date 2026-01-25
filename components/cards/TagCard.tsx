import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import ROUTES from "@/constants/routes";
import { getDevIconClassName } from "@/lib/utils";
import Image from "next/image";

interface Props {
  _id: string;
  name: string;
  questions?: number;
  showCount?: boolean;
  compact?: boolean;
  remove?: boolean;
  isButton?: boolean;
  handleRemove?: () => void;
}

const TagCard = ({ _id, name, questions, showCount, compact, remove, isButton, handleRemove }: Props) => {
  const iconClass = getDevIconClassName(name);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const Content = (
    <Badge className="btn-secondary rounded-md border-none px-4 py-2 uppercase">
      <div className="flex-center space-x-2">
        <i className={`${iconClass} text-sm`}></i>
        <span className="dark:primary-text-gradient text-amber-950">{name}</span>
      </div>
    </Badge>
  );

  if (compact)
    return isButton ? (
      <button onClick={handleClick} className="btn-secondary flex justify-between gap-2">
        {Content}
        {remove && (
          <Image
            src="/icons/close.svg"
            width={12}
            height={12}
            alt="close icon"
            className="mr-2 cursor-pointer object-contain invert-0 dark:invert"
            onClick={handleRemove}
          />
        )}
      </button>
    ) : (
      <Link href={ROUTES.TAGS(_id)} className="btn-secondary flex items-center">
        {Content}
        {showCount && <p className="small-medium mr-2 text-shadow-amber-950 dark:text-white">{questions}</p>}
      </Link>
    );
};

export default TagCard;
