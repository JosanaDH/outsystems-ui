/// <reference path="../AbstractPattern.ts" />

// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace OSUIFramework.Patterns.FloatingActions {
	export class FloatingActionsItem
		extends AbstractPattern<FloatingActionsItemConfig>
		implements IFloatingActionsItem
	{
		// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
		constructor(uniqueId: string, configs: any) {
			super(uniqueId, new FloatingActionsItemConfig(configs));
		}

		public setTabIndex(FloatingActionsItem: HTMLElement, value: string): void {
			Helper.Attribute.Set(FloatingActionsItem, Constants.AccessibilityAttribute.TabIndex, value);
		}
	}
}
