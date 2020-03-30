---
id: fonction
title: Fonctions
sidebar_label: Récap'
---

![](https://media.giphy.com/media/3oz8xtzQEbPSMVrKzm/giphy.gif)

C’est quoi ?

### Définition classique

_Les fonctions sont des sous algorithmes admettant des
paramètres et retournant un seul résultat (une seule valeur) de type simple qui peut apparaître dans une expression, dans une comparaison, à la droite d'une affectation, etc._

Voici une vidéo que nous avons réalisé afin que vous compreniez mieux le sujet:

[<img src="http://i3.ytimg.com/vi/4Cer8Eiu6wE/hqdefault.jpg">](https://www.youtube.com/watch?v=4Cer8Eiu6wE)

A quoi ça sert ?

Un algorithme peut quelques fois s'avérer complexe, et il est très souvent utile de le découper en plusieurs parties. C'est exactement le but premier des **fonctions**. Elles contribuent à la compréhension de l'algorithme en le découpant en petites parties aisément compréhensible et indépendantes. Pour cela, toutes les fonctions renvoies une valeur (sinon il s'agit d'une _procédure_), et de ce fait, chaque fonction possède un type, qui en réalité, est le type de la valeur qu'elle retourne.

Voici un exemple de syntaxe :

![](./assets/fonction_cours1.png)

Encore une fois, pour visualiser ce à quoi peux ressembler une fonction dans un cas plus concret, revenons sur [notre exemple](./algo.md).

Parmi toutes les étapes de notre algorithme sur le château de sable, nous pouvons découper notre procédé en 3 fonctions. Une première pour _Poser des patés de sable sur la structure principal_, une deuxième pour _Modeler le sable pour en faire des parties du château_ et une dernière pour _vérifier si le château nous plaît._

Voici à quoi pourraient ressembler ces fonctions en pseudo-code :

![](./assets/fonction_cours2.png)

Pour finir, retenez ces 3 choses sur les Fonctions:

- **Appel de fonction**: pour éxécuter la fonction que vous venez de créer, il suffit de _l'appeler_: **Nom_Fonc(liste de paramètres)**. L'appel peut se faire dans n'importe quelle instruction qui utilise sa valeur.
- **Retour de la fonction**: on appuie encore une fois sur ce point, mais une fonction n'affiche **jamais** la valeur qu'elle retourne, car elle la renvoie simplement à l'algorithme ou l'instruction qui l'appelle.
- **La portée des variables**: c'est le domaine de visiblité d'une variable. Le nom fait peur, mais c'est assez simple à comprendre: une variable n'a que accès à l'environnement dans lequel elle se trouve. Si elle est dans une fonction (_on parle de variable locale_), alors elle n'a accès qu'au mêmes variables dans cette fonction. Sinon, c'est une _variable globale_, et elle est **accessible** depuis toutes les fonctions sous elle et dans l'algorithme.

C'est l'essentiel de ce qu'il faut retenir pour la partie sur les Fonctions! 💻

Si vous vous sentez toujours perdu ou voulez approfondir votre connaissance, allez [ici.](./fonction_ressources.md)

Si vous voulez passer directement au exercices, c'est par [ici.](./fonction_exercices.md)
