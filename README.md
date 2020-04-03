# MyRestaurant
application mobile de gestion de commandes  des employés dans le restaurant d'une entreprise
intaller le derniere version de  node js avec l'utilitaire npm 
 	node -- version
	npm --version

installer ionic avec la commande 
	npm install -g ionic 
creer une application ionic avec l'option tabs 
  	ionic start myrestaurant tabs
copier le dossier source src dans votre projet

les differentes fonctionalités de l'employer 
*s'inscrire 
*se connecter
* voir son profil et mofier ces informations
*ajouter une photo de profil a pertir de son appareil photo 
*passer un commande (ajouter le plat du jour, le nombre de plats)

Les fontionalités de l'administrateur 
*se connecter
* voir son profil et mofier ces informations
*ajouter une photo de profil a pertir de son appareil photo 
*voir la listes de palats
*ajouter le plat du jour
*voir la liste des commandes
 
crrer une communication avec les webservices 
nous utilisons en backend STRAPI 
*il faut changer la chemin de l'URL et ajour l'adresse de l'API "http://localhost:1337/admin"
pour tester l'application lancer d'abord le serveur strapi
pui executer la commande ionic serve ve dans le repertoire du projet 
mais cela ne suffit il faut le tester aumoins dans un emulateur 
nous allons le tester sur android par exemple 
les plugins natives sont installer dans le projet  avec capacitor: on utilise la commande 
"ionic integrations enable capacitor"
copier les dossier www  dans le projet qui comporte le build 
copier le dossier  android et ios aussi 
pour tester l'application il f	ut installer un JDK 8
