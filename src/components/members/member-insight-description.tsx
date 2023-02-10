import Grid from "antd/lib/grid";
import Descriptions from "antd/lib/descriptions";
import Item from "antd/lib/descriptions/Item";
import { FC, useContext } from "react";
import type { MemberPrivateInfo } from "../../services/_types";
import React from "react";
import { LanguageCtx } from "../../services/context/language-ctx";

const { useBreakpoint } = Grid;

type Props = {
  member: MemberPrivateInfo;
};

const MemberInsightDescription: FC<Props> = ({ member }) => {
  const screens = useBreakpoint();
  const { en } = useContext(LanguageCtx);
  const insight = member.insight;

  return (
    <Descriptions
      size="small"
      bordered
      column={1}
      labelStyle={{ whiteSpace: "break-spaces", width: "8rem" }}
      contentStyle={{ whiteSpace: "break-spaces" }}
      layout={screens.xs ? "vertical" : "horizontal"}
    >
      <Item label={en ? "Interview Date" : "Date de l'entretien"}>
        {insight?.interview_date?.split("T")[0] || ""}
      </Item>
      <Item label={en ? "About Member" : "À propos du membre"}>{insight?.about_member}</Item>
      <Item label={en ? "About Promotions" : "À propos des promotions"}>
        {insight?.about_promotions}
      </Item>
      <Item label={en ? "Dream" : "Rêver"}>{insight?.dream}</Item>

      <Item label={en ? "How the institute can help" : "Comment l'institut peut vous aider"}>
        {insight?.how_can_we_help}
      </Item>
      <Item label={en ? "Admin Notes" : "Notes d'administration"}>{insight?.admin_notes}</Item>
      <Item label={en ? "Other Notes" : "Autres notes"}>{insight?.other_notes}</Item>
    </Descriptions>
  );
};

export default MemberInsightDescription;
