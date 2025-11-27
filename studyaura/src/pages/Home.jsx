import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-5xl font-bold">{t("title")}</h1>
      <p className="text-lg mt-2">{t("tagline")}</p>

      <Link to="/login">
        <button className="mt-6 bg-blue-600 px-6 py-3 text-white rounded-lg">
          {t("login")}
        </button>
      </Link>
    </div>
  );
}
