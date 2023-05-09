
    const factorizeButton = document.querySelector('#factorize');
    const polynomialInput = document.querySelector('#polynomial');
    const responseDiv = document.querySelector('#response');

    factorizeButton.addEventListener('click', () => {
      const polynomial = polynomialInput.value;
      const apiUrl = `https://newton.vercel.app/api/v2/factor/${polynomial}`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          responseDiv.textContent = data.result;
        })
    });