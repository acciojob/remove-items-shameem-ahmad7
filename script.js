document.getElementById('removeButton').addEventListener('click', function() {
    const colorSelect = document.getElementById('colorSelect');
    const selectedOption = colorSelect.options[colorSelect.selectedIndex];

    // Remove the selected option
    if (selectedOption) {
        colorSelect.removeChild(selectedOption);
    }
});
