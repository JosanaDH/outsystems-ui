// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace OSUIFramework.Patterns.AnimatedLabel {
	export class AnimatedLabel extends AbstractPattern<AnimatedLabelConfig> implements IAnimatedLabel {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		private _eventOnAnimationStart: any;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		private _eventOnBlur: any;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		private _eventOnFocus: any;

		// Set the input html element
		private _inputElem: HTMLInputElement | HTMLTextAreaElement;

		// Set the inputPlaceholder html element
		private _inputPlaceholderElem: HTMLElement;

		// Flag that will be manage if the label is active
		private _isLabelActive: boolean;

		// Set the labelPlaceholder html element
		private _labelPlaceholderElem: HTMLElement;

		// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
		constructor(uniqueId: string, configs: any) {
			super(uniqueId, new AnimatedLabelConfig(configs));

			// Set the method that will be assigned to the window click event
			this._eventOnBlur = this._onInputBlur.bind(this);
			this._eventOnFocus = this._onInputFocus.bind(this);
			this._eventOnAnimationStart = this._onInputFocus.bind(this);
		}

		// Add Pattern Events
		private _addEvents(): void {
			this._inputElem.addEventListener(GlobalEnum.HTMLEvent.Blur, this._eventOnBlur);
			this._inputElem.addEventListener(GlobalEnum.HTMLEvent.Focus, this._eventOnFocus);
			this._inputElem.addEventListener(GlobalEnum.HTMLEvent.AnimationStart, this._eventOnAnimationStart);
		}

		// Check if the input is empty, if yes reposition the Label
		private _onInputBlur(): void {
			if (this._inputElem.value === '' && this._isLabelActive) {
				this._isLabelActive = false;
				Helper.Style.RemoveClass(this._selfElem, Enum.CssClasses.IsActive);
			}
		}

		// Add the active cssClass into the Label since content will be added into input
		private _onInputFocus(): void {
			if (this._inputElem.value === '' && !this._isLabelActive) {
				this._isLabelActive = true;
				Helper.Style.AddClass(this._selfElem, Enum.CssClasses.IsActive);
			}
		}

		// Update info based on htmlContent
		private _setHtmlElements(): void {
			this._labelPlaceholderElem = this._selfElem.querySelector(Constants.Dot + Enum.CssClasses.LabelPlaceholder);
			this._inputPlaceholderElem = this._selfElem.querySelector(Constants.Dot + Enum.CssClasses.InputPlaceholder);

			this._inputElem =
				this._inputPlaceholderElem.querySelector(GlobalEnum.DataBlocksTag.Input) ||
				this._inputPlaceholderElem.querySelector(GlobalEnum.DataBlocksTag.TextArea);

			// Check if the input exist
			if (this._inputElem) {
				if (this._inputElem.value) {
					this._isLabelActive = true;
					Helper.Style.AddClass(this._selfElem, Enum.CssClasses.IsActive);
				} else {
					this._isLabelActive = false;
				}
			} else {
				throw new Error(Enum.Messages.InputNotFound);
			}

			// Show a warning message if a label was in use
			if (!this._labelPlaceholderElem.querySelector(GlobalEnum.DataBlocksTag.Label)) {
				console.warn(Enum.Messages.LabelNotFound);
			}
		}

		public build(): void {
			//OS takes a while to set the TextArea
			setTimeout(() => {
				super.build();

				this._setHtmlElements();

				this._addEvents();

				this.finishBuild();
			}, 0);
		}

		// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
		public changeProperty(propertyName: string, propertyValue: any): void {
			super.changeProperty(propertyName, propertyValue);
		}

		// Destroy the Animatedlabel
		public dispose(): void {
			super.dispose();

			this._inputElem.removeEventListener(GlobalEnum.HTMLEvent.Blur, this._eventOnBlur);
			this._inputElem.removeEventListener(GlobalEnum.HTMLEvent.Focus, this._eventOnFocus);
			this._inputElem.removeEventListener(GlobalEnum.HTMLEvent.AnimationStart, this._eventOnAnimationStart);
		}

		// Update Label active status accordingly when the input info has canhged
		public updateOnRender(): void {
			// Do not run this instead the pattern is totally built
			if (this.isBuilt) {
				if (this._inputElem.value === '') {
					this._isLabelActive = false;
					Helper.Style.RemoveClass(this._selfElem, Enum.CssClasses.IsActive);
				}

				if (this._inputElem.value !== '' && !this._isLabelActive) {
					this._isLabelActive = true;
					Helper.Style.AddClass(this._selfElem, Enum.CssClasses.IsActive);
				}
			}
		}
	}
}