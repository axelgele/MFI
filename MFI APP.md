# MFI APP : Projet préalable a un entretien technique
## Features
- Affichage d'une map centrée sur la France
- Affichage de deux marqueurs placés sur Paris et Toulouse
- Récupération des températures des 3 derniers jours
- Déploiement en local grace a Docker-compose

## Installation

MFI-APP requiert  [Node.js](https://nodejs.org/) v10+ pour fonctionner.
Installez les dépendances.

```sh
cd mfi-app
npm i
```

et lancez le serveur...

```sh
npm start
```

## Dépendances

react-simple-map : 
La bibliothèque React Simple Map est une bibliothèque React open source qui permet de créer facilement des cartes interactives dans une application web React. Cette bibliothèque utilise la bibliothèque de cartographie open source Leaflet.js pour afficher les cartes et les données géospatiales.


## Docker

Par défaut, Docker expose le port 3080, donc changez-le si nécessaire dans le fichier Dockerfile. Une fois prêt, utilisez simplement le fichier Dockerfile pour créer l'image.
```sh
cd my-app
docker-compose build --no-cache
```

Une fois terminé, exécutez l'image Docker:

```sh
docker-compose up
```


## Pistes d'améliorations
- Déplacer le code ailleurs que dans l'index.js
- Avoir une interface utilisateur plus esthétique
- Ecrire un vrai webservice
- Faire des tests
- Mettre en place un vrai systeme de routage
- Stocker les clés API ailleurs qu'en clair dans le code


Merci pour le temps que vous accorderez à la lecture de mon code, j'espère avoir l'occasion de discuter de mes expériences et de ce projet en entretien.

