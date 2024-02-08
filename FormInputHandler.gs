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

  // Additional methods to handle other types of inputs can be added here
  // ...
}
