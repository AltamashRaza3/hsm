// Central icon registry so data files can reference icons by name (string)
// without importing React components directly.
import {
  GraduationCap, Factory, FileCheck, BookOpen, Target, Clock, Users, Eye,
  Flame, HeartPulse, Siren, ArrowUpFromLine, CircleDot, Zap, HardHat,
  ClipboardCheck, ShieldCheck, Search, AlertTriangle, Layers, BadgeCheck,
  FileSearch, ClipboardList,
} from "lucide-react";

export const iconMap = {
  GraduationCap, Factory, FileCheck, BookOpen, Target, Clock, Users, Eye,
  Flame, HeartPulse, Siren, ArrowUpFromLine, CircleDot, Zap, HardHat,
  ClipboardCheck, ShieldCheck, Search, AlertTriangle, Layers, BadgeCheck,
  FileSearch, ClipboardList,
};

export const getIcon = (name) => iconMap[name] || ShieldCheck;
