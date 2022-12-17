import { IComponentMaterial } from "core-react";
import { Layout } from "antd";
import { footerLocales } from "./locales";
import { footerSchema } from "./schema";

export const FooterMaterial: IComponentMaterial = {
  componentName: "Layout.Footer",
  component: Layout.Footer,
  designer: Layout.Footer,
  designerLocales: footerLocales,
  designerSchema: footerSchema,
  behaviorRule: {
    droppable: true,
  }
}
