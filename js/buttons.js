// window.onload = function () {
//     document
//         .querySelector(".say-hi-button")
//         .addEventListener("click", function () {
//             // here you can change also a-scene or a-entity properties, like
//             // changing your 3D model source, size, position and so on
//             // or you can just open links, trigger actions...
//             alert("Hi there!");
//         });
// };


// Fonction pour afficher les anneaux
document.getElementById('starts').addEventListener('click', function () {
    const ringContainer = document.getElementById('ring-container');

    // Vérifier si le navigateur fournit bien les données GPS
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);

            // Ajouter les anneaux au conteneur basé sur les coordonnées GPS
            ringContainer.innerHTML = `
            <a-torus gps-entity-place="latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude}" position="0 0 0" radius="1.5" radius-tubular="0.1" color="#FF5733"></a-torus>
            <a-torus gps-entity-place="latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude}" position="0 1 0" radius="2" radius-tubular="0.1" color="#33FF57"></a-torus>
            <a-torus gps-entity-place="latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude}" position="0 2 0" radius="2.5" radius-tubular="0.1" color="#3357FF"></a-torus>
          `;
        }, function (error) {
            console.error("Erreur lors de la récupération des données GPS: ", error);
            alert("Impossible de récupérer les données GPS.");
        });
    } else {
        console.error("La géolocalisation n'est pas supportée par ce navigateur.");
        alert("La géolocalisation n'est pas supportée.");
    }
});
