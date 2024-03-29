class FormInputHandler {
  /**
   * @param {Object} event the event object from Chat API.
   */
  constructor(event) {
    // Check if formInputs exist in the event structure
    if (event.common && event.common.formInputs) {
      this.formInputs = event.common.formInputs;
      this.isValid = true; // Mark as valid if formInputs are found
    } else {
      // Handle the invalid case
      this.isValid = false;
      console.log('Invalid event: formInputs not found.');
      // Depending on your application, you might throw an error or handle this case differently
    }
  }

  /**
   * Method to check if the handler instance is valid
   */
  isValidHandler() {
    return this.isValid;
  }

  /**
   * Get all parameters as array of elements
   */
  getParameters() {
    let parameters = []

    Object.keys(this.formInputs).forEach(fieldName => {
      parameters.push({
        'key': fieldName,
        'value': this.getTextValue(fieldName)
      })
    })

    return parameters
  }

  /**
   * Retrieve a text input value by field name, adjusted for the specific structure
   *
   * @param {String} fieldName of a stringInputs field
   */
  getTextValue(fieldName) {
    if (this.isValid && this.formInputs[fieldName] &&
      this.formInputs[fieldName][''] &&
      this.formInputs[fieldName][''].stringInputs &&
      this.formInputs[fieldName][''].stringInputs.value) {
      return this.formInputs[fieldName][''].stringInputs.value[0];
    }
    return null;
  }

  /**
   * Retrieve a single selection value by field name
   *
   * @param {String} fieldName of a stringInputs field
   */
  getSingleSelectValue(fieldName) {
    if (this.isValid && this.formInputs[fieldName] &&
      this.formInputs[fieldName].singleSelectInput) {
      return this.formInputs[fieldName].singleSelectInput.selectedOption.value;
    }
    return null;
  }

  /**
   * Retrieve multiple selection values by field name
   *
   * @param {String} fieldName of a stringInputs field
   */
  getMultipleSelectValues(fieldName) {
    if (this.isValid && this.formInputs[fieldName] && this.formInputs[fieldName].multipleSelectInput) {
      return this.formInputs[fieldName].multipleSelectInput.selectedOptions.map(option => option.value);
    }
    return [];
  }

  // Additional methods to handle other types of inputs can be added here
  // ...
}
