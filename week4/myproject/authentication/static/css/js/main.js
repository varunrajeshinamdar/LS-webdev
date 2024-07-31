document.addEventListener('DOMContentLoaded', function() {
    const createForm = document.getElementById('create-post-form');
    const editForm = document.getElementById('edit-post-form');
    const deleteForm = document.getElementById('delete-post-form');

    if (createForm) {
        createForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            const formData = new FormData(createForm);
            const response = await

            
