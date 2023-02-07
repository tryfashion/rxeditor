import { INodeSchema } from "core";
import { labelSchema } from "../../baseSchema";

export const randomSchema: INodeSchema = {
  componentName: "Fragment",
  children: [
    labelSchema,
    {
      componentName: "FormItem",
      props: {
        label: "$maxValue",
      },
      children: [
        {
          componentName: "InputNumber",
          "x-field": {
            name: `config.maxValue`,
          },
        }
      ]
    },
    {
      componentName: "FormItem",
      props: {
        label: "$minValue",
      },
      children: [
        {
          componentName: "InputNumber",
          "x-field": {
            name: `config.minValue`,
          },
        }
      ]
    },
  ],
}