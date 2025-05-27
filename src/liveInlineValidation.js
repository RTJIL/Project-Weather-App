function liveInlineValidation() {
  const form = document.querySelector('.check-form'); // ✅ Corrected class
  const locationInput = document.getElementById('location');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
  });

  locationInput.addEventListener('input', () => {
    const value = locationInput.value.trim();

    if (value.length >= 2 && /^[a-zA-Z\s,.'-]+$/.test(value)) {
      setSuccess(locationInput);
    } else {
      setError(locationInput, 'Invalid location! Only letters & spaces allowed.');
    }
  });

  const setError = (element, message) => {
    const errorDisplay = form.querySelector('.error');
    errorDisplay.innerText = message;
    element.classList.add('input-error');
    element.classList.remove('input-success');
  };

  const setSuccess = (element) => {
    const errorDisplay = form.querySelector('.error');
    errorDisplay.innerText = '';
    element.classList.add('input-success');
    element.classList.remove('input-error');
  };

  const validateInputs = () => {
    const value = locationInput.value.trim();

    if (value === '') {
      setError(locationInput, 'Location is required 🌍');
    } else if (!/^[a-zA-Z\s,.'-]+$/.test(value)) {
      setError(locationInput, 'Only letters, commas, spaces, and dashes allowed!');
    } else {
      setSuccess(locationInput);
    }
  };
}

export { liveInlineValidation };
