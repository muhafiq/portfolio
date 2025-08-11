import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";

type Props = {
  toasts: {
    id: number;
    message: string;
    type: "success" | "error" | "warning";
  }[];
};

export const ToastContainer = ({ toasts }: Props) => {
  return (
    <div className="fixed top-4 right-4 space-y-2 z-50">
      {toasts.map((toast) => {
        let IconComponent;
        let iconColor = "white";

        switch (toast.type) {
          case "success":
            IconComponent = CheckCircle;
            iconColor = "white";
            break;
          case "error":
            IconComponent = XCircle;
            iconColor = "white";
            break;
          case "warning":
            IconComponent = AlertTriangle;
            iconColor = "black";
            break;
          default:
            IconComponent = null;
        }

        return (
          <div
            key={toast.id}
            className={`p-4 rounded shadow-lg animate-fadeInOut flex items-center gap-2
              ${toast.type === "success" && "bg-green-500 text-white"}
              ${toast.type === "error" && "bg-red-500 text-white"}
              ${toast.type === "warning" && "bg-yellow-500 text-black"}`}
          >
            {IconComponent && <IconComponent size={20} color={iconColor} />}
            <span>{toast.message}</span>
          </div>
        );
      })}
    </div>
  );
};
