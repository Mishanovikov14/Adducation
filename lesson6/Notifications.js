class ErrorMessage {
  static show = (text) => {
    const block = document.createElement('div');

    block.style.color = 'red';
    block.innerText = text;

    errorMessages.appendChild(block);

    setTimeout(() => {
      errorMessages.removeChild(block);
    }, 5000);
  }
}

export default ErrorMessage;
