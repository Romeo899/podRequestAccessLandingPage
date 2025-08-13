class EmailValidator {
    constructor(formId, emailInputId) {
      this.form = document.getElementById(formId);
      this.emailInput = document.getElementById(emailInputId);
  
      if (this.form && this.emailInput) {
        this.form.addEventListener("submit", (e) => this.handleSubmit(e));
      }
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const emailVal = this.emailInput.value.trim();
  
      if (!this.validateEmail(emailVal)) {
        this.showError("Please enter a valid email address.");
        return;
      }
  
      this.removeError();
  
      // TODO: Finish request
    }
  
    validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email.toLowerCase());
    }
  
    showError(message) {
      this.form.classList.add("form--error");
    }
  
    removeError() {
      this.form.classList.remove("form--error");
    }
  }
  
  // Initialize the validator
  new EmailValidator("form", "email");