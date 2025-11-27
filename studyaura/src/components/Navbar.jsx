import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { user } = useAuth();

  return (
    <nav className="p-4 bg-purple-600 text-white flex justify-between">
      <h1 className="text-xl font-bold">{t("title")}</h1>

      <div className="flex items-center gap-4">
        <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
          <option value="en">EN</option>
          <option value="hi">हिन्दी</option>
          <option value="te">తెలుగు</option>
        </select>

        <img src={user.photoURL} className="w-10 rounded-full" />
      </div>
    </nav>
  );
}
