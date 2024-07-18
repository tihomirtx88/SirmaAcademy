document.getElementById('add-button').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();

    if (task !== '') {
        const ul = document.getElementById('todo-list');

        const li = document.createElement('li');
        li.textContent = task;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-button';

        removeButton.addEventListener('click', function() {
            ul.removeChild(li);
        });

        li.appendChild(removeButton);
        ul.appendChild(li);

        input.value = ''; // Clear the input field
    }
});