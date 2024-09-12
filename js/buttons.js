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

    // Créer les anneaux et les ajouter à la scène AR
    ringContainer.innerHTML = `
<a-torus gps-entity-place="latitude: 49.443233; longitude: 1.099971" position="0 0 0" radius="1.5" radius-tubular="0.1" color="#FF5733"></a-torus>
<a-torus gps-entity-place="latitude: 49.443233; longitude: 1.099971" position="0 1 0" radius="2" radius-tubular="0.1" color="#33FF57"></a-torus>
<a-torus gps-entity-place="latitude: 49.443233; longitude: 1.099971" position="0 2 0" radius="2.5" radius-tubular="0.1" color="#3357FF"></a-torus>
`;
});
