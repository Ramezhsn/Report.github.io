document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.content-block h2');
    headers.forEach(header => {
        const content = header.nextElementSibling;
        content.style.display = 'none'; // Initially hide the content

        header.addEventListener('click', function() {
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });

        // Add a cursor style to indicate that the headers are clickable
        header.style.cursor = 'pointer';
    });
});