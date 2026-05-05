import type { LucideProps } from "lucide-react";
import {
  Globe,
  MessageCircle,
  Hotel,
  Map,
  FishSymbol,
  Calendar,
  Package,
  HeartPulse,
  Stethoscope,
  Apple,
  Landmark,
  Sprout,
  Lock,
  UserCheck,
  Eye,
  ShieldCheck,
  FileSearch,
  Bell,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Facebook,
  Instagram,
  Twitter,
  Check,
  Search,
  FileText,
  Shield,
  CheckCircle,
  ChevronDown,
  X,
  Menu,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Globe,
  MessageCircle,
  Hotel,
  Map,
  FishSymbol,
  Calendar,
  Package,
  HeartPulse,
  Stethoscope,
  Apple,
  Landmark,
  Sprout,
  Lock,
  UserCheck,
  Eye,
  ShieldCheck,
  FileSearch,
  Bell,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Facebook,
  Instagram,
  Twitter,
  Check,
  Search,
  FileText,
  Shield,
  CheckCircle,
  ChevronDown,
  X,
  Menu,
};

interface DynamicIconProps extends LucideProps {
  name: string;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return <IconComponent {...props} />;
}
