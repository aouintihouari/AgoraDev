import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import ROUTES from "@/constants/routes";
import { getDevIconClassName } from "@/lib/utils";

interface Props {
  _id: string;
  name: string;
  questions?: number;
  showCount?: boolean;
  compact?: boolean;
}

const TagCard = ({ _id, name, questions, showCount, compact }: Props) => {
  const iconClass = getDevIconClassName(name);

  return (
    <Link href={ROUTES.TAGS(_id)} className="flex justify-between gap-2">
      <Badge className="btn-secondary rounded-md border-none px-4 py-2 uppercase">
        <div className="flex-center space-x-2">
          <i className={`${iconClass} text-sm`}></i>
          <span className="dark:primary-text-gradient text-amber-950">{name}</span>
        </div>
      </Badge>
      {showCount && <p className="small-medium text-shadow-amber-800 dark:text-white">{questions}</p>}
    </Link>
  );
};

export default TagCard;
