function SuccessMessage({ isSubmitted }) {
  return isSubmitted ? (
    <div className="form__success__message">Thank you for contacting me!</div>
  ) : null;
}
export default SuccessMessage;
