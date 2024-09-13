
// // Fonction pour afficher les anneaux
// document.getElementById('start').addEventListener('click', function () {
//     const ringContainer = document.getElementById('ring-container');

//     // Vérifier si le navigateur fournit bien les données GPS
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function (position) {
//             console.log("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);

//             // Ajout d'un décalage pour placer les anneaux un peu plus loin
//             const latitudeOffset = 0.00005;  // Déplacement léger en latitude
//             const longitudeOffset = 0.00005;  // Déplacement léger en longitude

//             const adjustedLatitude = position.coords.latitude + latitudeOffset;
//             const adjustedLongitude = position.coords.longitude + longitudeOffset;


//             // Ajouter les anneaux au conteneur basé sur les coordonnées GPS
//             ringContainer.innerHTML = `
//             <a-torus gps-entity-place="latitude: ${adjustedLatitude}; longitude: ${adjustedLongitude}" position="0 0 0" radius="1.5" radius-tubular="0.1" color="#FF5733"></a-torus>
//             <a-torus gps-entity-place="latitude: ${adjustedLatitude}; longitude: ${adjustedLongitude}" position="0 1 0" radius="2" radius-tubular="0.1" color="#33FF57"></a-torus>
//             <a-torus gps-entity-place="latitude: ${adjustedLatitude}; longitude: ${adjustedLongitude}" position="0 2 0" radius="2.5" radius-tubular="0.1" color="#3357FF"></a-torus>
//           `;
//         }, function (error) {
//             console.error("Erreur lors de la récupération des données GPS: ", error);
//             alert("Impossible de récupérer les données GPS.");
//         });
//     } else {
//         console.error("La géolocalisation n'est pas supportée par ce navigateur.");
//         alert("La géolocalisation n'est pas supportée.");
//     }
// });