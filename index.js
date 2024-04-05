


        function countdown() {
            let count = 10;
            const countdownContainer = document.getElementById('countdownContainer');

            function displayCount() {
                countdownContainer.innerText = count;
                count--;

                if (count >= 0) {
                    setTimeout(displayCount, 1000);
                } else {
                    countdownContainer.innerText = 'HappyIndepence Day';
                }
            }

            displayCount();
        }

      function callback(fun){
            fun();
        }

        callback(countdown);
    
