// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace OSFramework.Patterns.RangeSlider {
	/**
	 * Defines the interface for OutSystemsUI rangeSlider Pattern
	 */
	export interface IRangeSlider extends Interface.IPattern {
		setProviderConfigs(providerConfigs: ProviderConfigs): void;
		setProviderEvent(eventName: string, callback: OSFramework.GlobalCallbacks.Generic, uniqueId: string): void;
		unsetProviderEvent(eventId: string): void;
	}
}