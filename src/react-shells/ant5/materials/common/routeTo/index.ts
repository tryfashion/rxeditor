import { routeIcon } from "react-shells/ant5/icons/reactions";
import { createUuid } from "react-shells/ant5/SettingsForm/components/ReactionsInput/ReactionsEditor/utils";
import { IReactionMaterial } from "runner/reaction";
import { ReactionType } from "runner/reaction/interfaces/metas";
import { RouteTo } from "./reaction";
import { routeToSchema } from "./schema";

export const routeToMaterial: IReactionMaterial = {
  name: "routeTo",
  icon: routeIcon,
  label: "$routeTo",
  reactionType: ReactionType.SingleReaction,
  meta: {
    inPorts: [
      {
        id: createUuid(),
        name: "input",
        label: "",
      },
    ],
  },
  schema: routeToSchema,
  reaction: RouteTo,
}