import { AbstractReaction, IConfigMeta, IReactionMeta } from "runner/reaction";
import { IReactionFactoryOptions, ReactionFactory } from "runner/reaction/interfaces/controller";

export interface IConditionConfig extends IConfigMeta {
  trueExpression?: string
}

export class ConditionReaction extends AbstractReaction<IConditionConfig> {

  constructor(meta: IReactionMeta<IConditionConfig>, options?: IReactionFactoryOptions) {
    super(meta, options)

    if (Object.keys(meta.inPorts || {}).length !== 1) {
      throw new Error("Condition inputs count error")
    }

    this.getInputByName("input")?.connect(this.inputHandler)
  }

  inputHandler = (inputValue: string) => {
    if (this.meta.config?.trueExpression) {
      // eslint-disable-next-line no-new-func
      const func = new Function('inputValue', this.meta.config?.trueExpression)
      if(func(inputValue)){
        this.getInputByName('true')?.push(inputValue)
      }else{
        this.getInputByName('false')?.push(inputValue)
      }
    }
  }
}

export const Condition: ReactionFactory = (meta: IReactionMeta<IConditionConfig>, options?: IReactionFactoryOptions) => {
  return new ConditionReaction(meta, options)
}