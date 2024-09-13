
// Fonction pour afficher les anneaux quand le bouton est cliqué
document.getElementById('start2').addEventListener('click', function () {
    const ringContainer = document.getElementById('ring-container');

    // Effacer les anneaux précédents (si besoin)
    ringContainer.innerHTML = '';

    // Ajouter les anneaux dynamiquement
    ringContainer.innerHTML = `
    <a-torus position="0 0 -7" radius="1" radius-tubular="0.01" color="#FFFFFF" rotation="0 0 0"></a-torus>
    <a-torus position="0 0 -7" radius="1.2" radius-tubular="0.01" color="#FFFFFF" rotation="0 0 0"></a-torus>
    <a-torus position="0 0 -7" radius="1.4" radius-tubular="0.01" color="#FFFFFF" rotation="0 0 0"></a-torus>
    <a-torus position="0 0 -7" radius="1.6" radius-tubular="0.01" color="#FFFFFF" rotation="0 0 0"></a-torus>
    <a-torus position="0 0 -7" radius="1.8" radius-tubular="0.01" color="#FFFFFF" rotation="0 0 0"></a-torus>
    <a-torus position="0 0 -7" radius="2" radius-tubular="0.01" color="#FFFFFF" rotation="0 0 0"></a-torus>
    <a-torus position="0 0 -7" radius="2.2" radius-tubular="0.01" color="#FFFFFF" rotation="0 0 0"></a-torus>
    <a-torus position="0 0 -7" radius="2.4" radius-tubular="0.01" color="#FFFFFF" rotation="0 0 0"></a-torus>
    `;

    // Optionnel: Forcer le rendu après ajout
    ringContainer.addEventListener('loaded', function () {
        console.log("Anneaux ajoutés !");
    });
});
