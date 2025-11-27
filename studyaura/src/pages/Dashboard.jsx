import { useTranslation } from "react-i18next";
import MoodMentorAI from "../components/MoodMentorAI";
import StudyNotesAI from "../components/StudyNotesAI";
import ProfileEditor from "../components/ProfileEditor";

export default function Dashboard() {
  const { t } = useTranslation();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{t("dashboard")}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <MoodMentorAI />
        <StudyNotesAI />
        <ProfileEditor />
      </div>
    </div>
  );
}
