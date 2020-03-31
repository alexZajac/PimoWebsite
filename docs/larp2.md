---
id: larp2
title: Modules LARP
sidebar_label: Récap'
---

![](https://media.giphy.com/media/l0HlHJGHe3yAMhdQY/giphy.gif)

## But de ce TD

Se familiariser avec les **modules auxiliaires**, répondre à des problèmes en structurant les algorithmes.

## Pour ce TD

Savoir écrire un pseudo-code sur LARP, connaître les différents type de modules et savoir les utiliser.

Documentation complète sur les modules : _https://larp.marcolavoie.ca/fr/DocHTM/index.htm_, **section 1**

## Les modules

Pour simplifier la structure d’un algorithme, on peut le diviser en plusieurs sections. Ces sections sont appelées **modules**. Ils servent à exécuter des tâches simples. Par exemple : réaliser un calcul, afficher un menu ou des résultats.
Les modules sont similaires aux fonctions.

Chaque algorithme sur LARP possède un **module principal** où se trouvent les instructions principales. C’est là qu’on appelle les **modules auxiliaires**. L’instruction "EXECUTER" est omissible.

Le module principal est structuré de la façon suivante :

    DÉBUT
    \\instructions
    FIN

Tandis que les modules auxiliaires se présentent comme ceci :

    ENTRER
    \\instructions
    RETOURNER

Exemple de module principal :

![](assets/larp_8.png)

Il existe plusieurs types de modules auxiliaires :

- _Module sans paramètre_. Ici, le module affiche simplement un message.

![](assets/larp_9.png)

- _Module avec paramètres valeurs_. Ce module prend deux paramètres, exécute un calcule et affiche le résultat. Les variables dans le module principal ne sont pas affectées.

![](assets/larp_10.png)

- _Module avec paramètres références_. Le paramètre n’est pas une copie mais une référence, c’est-à-dire un autre nom pour la même variable. C’est pour cela que sa valeur est modifiée en dehors du module auxiliaire.

![](assets/larp_11.png)

- _Module avec valeur de retour_. La valeur de la variable "produit" est envoyée vers le module principal.

![](assets/larp_12.png)

C'est l'essentiel de ce qu'il faut retenir pour la partie sur les modules Larp! 💻

Maintenant vous avez deux possiblités:

- Soit vous voulez tester vos aptitudes et effectuez le quiz sur [Brightspace](https://testdevinci.brightspace.com/d2l/le/content/15827/fullscreen/25103/ViewLocation?title=Quiz+7+-+LARP+Modules&location=%2fd2l%2flms%2fquizzing%2fuser%2fquiz_summary.d2l%3fqi%3d844%26ou%3d15827%26cfql%3d1%26isprv%3d1%26dnb%3d1)

- Soit vous préférez profiter de la richesse du site et appronfondir vos connaissances !

Si vous vous sentez toujours perdu ou voulez approfondir votre connaissance, allez [ici.](./larp2_ressources.md)

Si vous voulez passer directement au exercices, c'est par [ici.](./larp2_exercices.md)
