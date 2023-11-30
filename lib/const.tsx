import { BookText, CheckSquare, ListTodo } from "lucide-react";
import { cn } from "./utils";

export const SideNavLink = [
  {
    title: "All Task",
    icon: (path: string) => <ListTodo size={18} className={cn(path === "dashboard" && "text-emon-accent")} />,
    link: "/dashboard",
    path: "dashboard"
  },
  {
    title: "Important Task",
    icon: (path: string) => <BookText size={18} className={cn(path === "important" && "text-emon-accent")} />,
    link: "/important",
    path: "important"
  },
  {
    title: "Complete Task",
    icon: (path: string) => <CheckSquare size={18} className={cn(path === "complete" && "text-emon-accent")} />,
    link: "/complete",
    path: "complete"
  },
]