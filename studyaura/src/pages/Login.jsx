import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";

export default function Login() {
  const { googleLogin } = useAuth();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center mt-20">
      <button
        onClick={googleLogin}
        className="bg-red-500 text-white px-6 py-3 rounded-lg"
      >
        {t("login")}
      </button>
    </div>
  );
}
