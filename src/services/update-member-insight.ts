import type { UpdateMemberInsightParams } from "../pages/api/update-member/[id]/insight";
import ApiRoutes from "../routing/api-routes";
import { en } from "./context/language-ctx";
import getAuthHeader from "./headers/auth-header";
import { contentTypeJsonHeader } from "./headers/content-type-headers";
import Notification from "./notifications/notification";
import type { MemberPrivateInfo } from "./_types";

export default async function updateMemberInsight(
  id: number,
  params: UpdateMemberInsightParams
): Promise<MemberPrivateInfo | null> {
  const authHeader = await getAuthHeader();
  if (!authHeader) return null;

  const notification = new Notification();
  try {
    notification.loading(
      en ? "Updating Member Info..." : "Mise à jour des informations sur les membres..."
    );
    const res = await fetch(ApiRoutes.updateMemberInsight(id), {
      method: "PATCH",
      headers: { ...authHeader, ...contentTypeJsonHeader },
      body: JSON.stringify(params),
    });
    if (!res.ok) throw await res.text();
    notification.success();
    return await res.json();
  } catch (e: any) {
    notification.error(e);
    return null;
  }
}
