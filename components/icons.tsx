import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  BookOpen,
  ClipboardList,
  Cog,
  Coins,
  FileCheck,
  Flag,
  Globe,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  MousePointer2,
  Phone,
  Presentation,
  Rocket,
  Shield,
  Sprout,
  Target,
  User,
  Users,
  Wallet,
  X,
  type LucideIcon,
} from "lucide-react";

export type IconName =
  | "phone"
  | "mail"
  | "pin"
  | "menu"
  | "close"
  | "arrow"
  | "arrowDown"
  | "book"
  | "chart"
  | "users"
  | "clipboard"
  | "shield"
  | "user"
  | "bulb"
  | "gear"
  | "coins"
  | "rocket"
  | "globe"
  | "target"
  | "fileCheck"
  | "cursor"
  | "wallet"
  | "presentation"
  | "sprout"
  | "flag";

const icons: Record<IconName, LucideIcon> = {
  phone: Phone,
  mail: Mail,
  pin: MapPin,
  menu: Menu,
  close: X,
  arrow: ArrowRight,
  arrowDown: ArrowDown,
  book: BookOpen,
  chart: BarChart3,
  users: Users,
  clipboard: ClipboardList,
  shield: Shield,
  user: User,
  bulb: Lightbulb,
  gear: Cog,
  coins: Coins,
  rocket: Rocket,
  globe: Globe,
  target: Target,
  fileCheck: FileCheck,
  cursor: MousePointer2,
  wallet: Wallet,
  presentation: Presentation,
  sprout: Sprout,
  flag: Flag,
};

export function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: IconName;
  className?: string;
}) {
  const Glyph = icons[name];
  return <Glyph className={className} strokeWidth={1.75} aria-hidden />;
}
