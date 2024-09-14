document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');

    // Lista de imágenes
    const photos = [
        'foto1.jpg',
        'foto2.jpg',
        'foto3.jpg',
        'foto4.jpg',
        'foto5.jpg',
        // Añade más fotos aquí
    ];

    // Agrega las imágenes a la galería
    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo;
        img.alt = 'Foto';
        gallery.appendChild(img);
    });
});