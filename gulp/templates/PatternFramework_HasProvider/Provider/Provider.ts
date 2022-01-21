// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace Providers.<%= patternNamePC %>.<%= providerNamePC %> {
	export class OSUI<%= providerNamePC %><C extends <%= patternNamePC %>.<%= providerNamePC %>.OSUI<%= providerNamePC %>Config>
		extends OSUIFramework.Patterns.<%= patternNamePC %>.Abstract<%= patternNamePC %><<%= providerNamePC %>, C>
		implements I<%= providerNamePC %>
	{
		/* TODO (by CreateNewPattern):
				Add provider as a module dependency and define:
					- <%= providerNamePC %>;
					- <%= providerNamePC %>Opts;
		 */
		
		// Store the provider reference
		protected _<%= providerName %>Provider: <%= providerNamePC %>;

		// Store the provider options
		protected _<%= providerName %>Opts: <%= providerNamePC %>Opts;

		constructor(uniqueId: string, configs: C) {
			super(uniqueId, configs);
		}

		// Create the provider instance
		private _createProviderInstance(): void {
			// TODO (by CreateNewPattern): Update or Remove
		}

		/**
		 * Sets the callbacks to be used with the provider.
		 *
		 * @protected
		 * @memberof OSUI<%= providerNamePC %>
		 */
		 protected setCallbacks(): void {
			// TODO (by CreateNewPattern): Update or Remove
		}

		/**
		 * Method to set the html elements used
		 *
		 * @protected
		 * @memberof OSUI<%= providerNamePC %>
		 */
		 protected setHtmlElements(): void {
			// TODO (by CreateNewPattern): Update or Remove
		}

		/**
		 * Unset callbacks that has been assigned to the element
		 *
		 * @protected
		 * @memberof OSUI<%= providerNamePC %>
		 */
		protected unsetCallbacks(): void {
			// TODO (by CreateNewPattern): Update or Remove
		}

		public build(): void {
			super.build();

			this.setCallbacks();

			this.setHtmlElements();

			this._createProviderInstance();

			super.finishBuild();
		}

		/**
		 * Update property value from a given property name at OnParametersChange
		 *
		 * @param {string} propertyName the name of the property that will be changed
		 * @param {unknown} propertyValue the new value that should be assigned to the given property name
		 * @memberof OSUI<%= providerNamePC %>
		 */
		public changeProperty(propertyName: string, propertyValue: unknown): void {
			super.changeProperty(propertyName, propertyValue);

			if (this.isBuilt) {
				switch (propertyName) {
					case OSUIFramework.Patterns.<%= patternNamePC %>.Enum.Properties.PROP_NAME:
						// TODO (by CreateNewPattern): Update or Remove
					break;
				}
			}
		}

		/**
		 * Destroy the <%= patternNamePC %>.
		 *
		 * @memberof OSUI<%= providerNamePC %>
		 */
		public dispose(): void {
			this._<%= providerName %>Provider.destroy();

			this.unsetCallbacks();

			super.dispose();
		}

		/**
		 * Method used to register the provider callback
		 *
		 * @param {string} eventName Event name that will be assigned
		 * @param {OSUIFramework.Callbacks.OSGeneric} callback Function name that will be passed as a callback function to the event above
		 * @memberof OSUI<%= providerNamePC %>
		 */
		public registerProviderCallback(eventName: string, callback: OSUIFramework.Callbacks.OSGeneric): void {
			switch (eventName) {
				case OSUIFramework.Patterns.<%= patternNamePC %>.Enum.Events.EVENT_NAME:
						// TODO (by CreateNewPattern): Update or Remove
					break;

				default:
					/* TODO (by CreateNewPattern): 
						The line below is created by the CreateNewPattern mechanism, that is not able to replace values
						as expected, that said, check other patterns to understand how to replace it!
					*/
					throw new Error("The givem '"+ eventName + "' event name it's not defined.");
			}
		}

		
	}
}