

Le rendu attendu est un projet Webpack, en Single Page Application, incluant SASS.

Celui-ci appellera l'API RAWG. Ainsi, les journalistes ne s'y connaissant pas vraiment dans le domaine du jeu vidéo, mais devant couvrir l'événement ne seront pas perdus et pourront s'informer sur les différents jeux évoqués.

L'objectif est clair. Ils doivent avoir un aperçu des jeux les plus attendus. Lorsque durant la conférence ils entendent parler d'un nom de jeu vidéo, ils doivent pouvoir avoir plus d'information, voir des images du jeu…

Pour y accéder, ils peuvent soit :

Le trouver sur la page d'accueil s'il est très récent, ou dans une page représentant le template PageList, si la recherche se porte à la trouvaille de ce jeu
En tapant son nom dans la barre de recherche. Les jeux avec le même nom / contenant les mêmes mots seront affichés dans le template PageList. Il peut alors cliquer sur sa card pour l'afficher
Le trouver en étant sur la page d'un jeu proche du jeu recherché, dans la catégorie "Jeux similaires"

Lorsqu'un développeur ou un représentant d'un studio parle de son jeu, si l'utilisateur est sur la page du jeu, il doit pouvoir cliquer sur le nom du développeur ou du studio de jeu afin de voir les jeux faits/édités par cette personne ou son studio.

Sur la page gameDetail, un journaliste peut cliquer sur un genre du jeu, un tag ou une plateforme afin d'afficher le template PageList pour l'attribut cliqué. Exemple : Le journaliste clique sur "Genre" => "Action". Il est redirigé sur le template PageList, avec 9 jeux d'action disponibles.

Le journaliste doit pouvoir cliquer sur un lien pour acheter le jeu afin de le voir sur une plateforme officielle, si celui-ci est sorti.
