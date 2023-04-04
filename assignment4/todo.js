const form = document.querySelector('#my-form');
const detailsList = document.querySelector('#details-list');
let detailsArray = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.elements.name.value;
    const dob = form.elements.dob.value;
    const gender = form.elements.gender.value;
    const foodArray = [];
    const foodInputs = form.querySelectorAll('input[name="food"]:checked');
    foodInputs.forEach((input) => {
        foodArray.push(input.value);
    });
    const drinkArray = Array.from(form.elements.drink.options)
        .filter(option => option.selected)
        .map(option => option.value);
    const other = form.elements.other.value;

    const details = {
        name,
        dob,
        gender,
        food: foodArray,
        drink: drinkArray,
        other,
    };

    detailsArray.push(details);
    form.reset();
    displayDetails();
});

function displayDetails() {
    detailsList.innerHTML = '';
    detailsArray.forEach((details, index) => {
        const div = document.createElement('div');
        div.classList.add('details');
        const html = `
            <p><strong>Name:</strong> ${details.name}</p>
            <p><strong>Date of Birth:</strong> ${details.dob}</p>
            <p><strong>Gender:</strong> ${details.gender}</p>
            <p><strong>Favorite Food:</strong> ${details.food.join(', ')}</p>
            <p><strong>Favorite Drink:</strong> ${details.drink.join(', ')}</p>
            <p><strong>Anything else:</strong> ${details.other}</p>
            <button class="edit" data-index="${index}">Edit</button>
            <button class="delete" data-index="${index}">Delete</button>
        `;
        div.innerHTML = html;
        detailsList.appendChild(div);

        const editButton = div.querySelector('.edit');
        editButton.addEventListener('click', () => {
            editDetails(index);
        });

        const deleteButton = div.querySelector('.delete');
        deleteButton.addEventListener('click', () => {
            deleteDetails(index);
        });
    });
}

function editDetails(index) {
    const details = detailsArray[index];
    form.elements.name.value = details.name;
    form.elements.dob.value = details.dob;
    if (details.gender === 'male') {
        form.elements.gender.value = 'male';
    } else {
        form.elements.gender.value = 'female';
    }
    form.elements.food.forEach((input) => {
        if (details.food.includes(input.value)) {
            input.checked = true;
        } else {
            input.checked = false;
        }
    });
    form.elements.drink.value = details.drink;
    form.elements.other.value = details.other;

    detailsArray.splice(index, 1);
    displayDetails();
}

function deleteDetails(index) {
    detailsArray.splice(index, 1);
    displayDetails();
}