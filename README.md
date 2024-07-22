
# To-Do List Application

## Description
Cette application To-Do List est développée en utilisant Cordova et jQuery Mobile. Elle permet aux utilisateurs d'ajouter, de compléter et de réinitialiser des tâches. Les tâches complétées peuvent être ramenées à l'état en cours en les glissant vers la gauche.

## Fonctionnalités
- Ajouter des tâches à la liste des tâches en cours.
- Marquer les tâches comme complétées en les glissant vers la droite.
- Ramener les tâches complétées à la liste des tâches en cours en les glissant vers la gauche.
- Réinitialiser la liste des tâches.

## Arborescence du projet
```
C:.
└───www
    │   index.html
    │   
    ├───css
    │       index.css
    │       
    ├───img
    │       logo.png
    │       
    ├───js
    │       index.js
    │       
    └───lib
            jquery.min.js
            jquery.mobile-1.4.5.min.css
            jquery.mobile-1.4.5.min.js
```

## Fichiers et répertoires
- `www/index.html` : La page principale de l'application.
- `www/css/index.css` : Fichier de style CSS pour la mise en forme de l'application.
- `www/img/logo.png` : Logo de l'application.
- `www/js/index.js` : Fichier JavaScript contenant la logique de gestion des tâches.
- `www/lib/jquery.min.js` : Bibliothèque jQuery.
- `www/lib/jquery.mobile-1.4.5.min.css` : Fichier CSS pour jQuery Mobile.
- `www/lib/jquery.mobile-1.4.5.min.js` : Bibliothèque jQuery Mobile.

## Installation
1. Clonez le repository sur votre machine locale.
2. Assurez-vous que Node.js et Cordova sont installés sur votre machine.
3. Installez les dépendances requises.
    \`\`\`bash
    npm install -g cordova
    \`\`\`
4. Créez une nouvelle application Cordova.
    \`\`\`bash
    cordova create to-do-list-app
    \`\`\`
5. Copiez les fichiers du projet dans le répertoire `www` de l'application Cordova.

## Exécution
Pour exécuter l'application sur un appareil ou un émulateur, utilisez la commande suivante :
\`\`\`bash
cordova run <platform>
\`\`\`
Remplacez \`<platform>\` par la plateforme cible, par exemple \`android\` ou \`ios\`.

## Utilisation
1. Ouvrez l'application.
2. Ajoutez une tâche en entrant du texte dans le champ de saisie et en cliquant sur le bouton "Ajouter".
3. Marquez une tâche comme complétée en la glissant vers la droite.
4. Ramenez une tâche complétée à la liste des tâches en cours en la glissant vers la gauche.
5. Réinitialisez la liste des tâches en cliquant sur le bouton "Réinitialiser".

## Auteur
- Cheikh Mouhamed Tidiane Thiam

