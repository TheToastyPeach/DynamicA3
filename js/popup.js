const buttonM = document.querySelector('#check');

buttonM.addEventListener('change', () => {
    if (buttonM.checked) {
        console.log('The checkbox is checked.');
    } else {
      console.log('The checkbox is not checked.');
    }
  });