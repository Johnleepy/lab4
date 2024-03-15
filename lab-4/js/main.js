(function () {
    let newUsersList = document.querySelector('.new-users-list');

    // READ THE PDF BEFORE STARTING
    // Step 1-5 is read the pdf.


    // Add your code here
    const form = document.querySelector('.new-user-form');

    // Add event listener
    form.addEventListener('submit', onSubmit);

    // On submit
    function onSubmit(event) {
        event.preventDefault();

        const usernameElement = form.elements['username'];
        const cityElement = form.elements['city'];
        const provinceElement = form.elements['province'];
        const username = usernameElement.value;
        const city = cityElement.value;
        const province = provinceElement.value;
        let isFormValid = true;

        if(isValueNotEmpty(username) == true && hasWhiteSpace(username) == false) {
            usernameElement.classList.remove('is-invalid');
        } else {
            isFormValid = false;
            usernameElement.classList.add('is-invalid');
        }

        if(isValueNotEmpty(city) == true) {
            cityElement.classList.remove('is-invalid');
        } else {
            isFormValid = false;
            cityElement.classList.add('is-invalid');
        }

        if(isValueNotEmpty(province) == true) {
            provinceElement.classList.remove('is-invalid');
        } else {
            isFormValid = false;
            provinceElement.classList.add('is-invalid');
        }

        if(isFormValid == true) {
            addUser(username, city, province);
            form.reset();
        }
    }

    // the isValueNotEmpty function: 
    // returns true if value not empty
    // returns false if the value is empty
    function isValueNotEmpty(value) {
        if (value !== '') {
            return true;
        }
        return false;
    }

    // the hasWhiteSpace function
    // returns true if s has whitespace
    // returns false if s does not have whitespace
    function hasWhiteSpace(s) {
        return (/\s/).test(s);
    }

    // adds user to the page.
    function addUser(username, city, province) {
        let newUser = `<li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">${username}</div>
                ${city}, ${province}
            </div>
            </li>`;
        newUsersList.innerHTML = newUsersList.innerHTML + newUser;
    }
})();