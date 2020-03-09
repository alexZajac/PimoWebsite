---
id: pseudo-code
title: Pseudo-code
sidebar_label: Récap'
---

# Pseudo-code

![](https://media.giphy.com/media/3o6Yg4GUVgIUg3bf7W/giphy.gif)

## Notions abordées :

Comprendre le fonctionnement d’un **pseudo-code** pas-à-pas.
Traduire un problème en pseudo-code et inversement.

_Savoir écrire un pseudo-code :_

Connaître les différents types de **boucles**, les **conditions**, la **structure** d’un algorithme.
Savoir comment manipuler les **variables**, afficher et lire.

### Le Pseudo-code, c'est quoi ?

Imaginez devoir écrire un programme informatique afin de répondre à un problème. Avant d'écrire directement la solution dans un langage de programmation en particulier, vous pouvez écrire un pseudo-code, une sorte de langage entre l'humain et l'ordinateur.
Par ailleurs, on rappelle qu'un pseudo-code peut ensuite être traduit dans n'importe quel langage de programmation.

Voyons quels sont les différents éléments que l'on peut retrouver dans un pseudo-code.

### Variable

_Espace mémoire permettant de stocker des éléments comme des nombres, caractères, phrases ou autre._

Une variable possède un **nom**, une **valeur**, un **type** et une **adresse**.

#### Exemple

**déclaration**  
_Variable_  
compteur : entier

**affectation**  
_compteur_ ← 10

Ici, la variable a pour nom “compteur”. Son type est un entier et sa valeur est 10. L’adresse n’est pas spécifiée mais nous n’en avons pas besoin pour manipuler la variable.

### Types de variables principaux

_Caractère_ : 'a'  
_Chaîne de caractères_ : "Bonjour, comment vas-tu ?"  
_Réel_ : 10.7  
_Entier_ : 20  
_Booléen_ : VRAI ou FAUX

### Opérateurs mathématiques

addition : +
soustraction :-
multiplication : \*
division : /
modulo : %

### Quelques opérateurs logiques

Les opérateurs logiques ('' vrai ou faux ‘’)

◼ _L'opérateur NON_. Donne le contraire de la variable.
Exemple : Si A = vrai alors NON A = faux

◼ _L'opérateur ET_. Seulement VRAI ET VRAI donne VRAI.
Exemple : Soient A vrai et B faux. Alors (A ET B) est faux.

◼ _L'opérateur OU_. Seulement FAUX OU FAUX donne FAUX.
Exemple : Soient A vrai et B faux. Alors (A OU B) est vrai.

### Condition "SI"

    Si [conditions] Alors
    	{instructions}
    Sinon
    	{instructions}
    FinSi

L'instruction `Sinon` est optionnelle.
On peut également avoir

    Si [conditions] Alors
    	{instructions}
    Sinon Si [condition] Alors
    	{instructions}
    Sinon
    	{instructions}
    FinSi

### Structure

Il faut savoir qu'il existe **plusieurs manières** d'écrire un pseudo-code car ce n'est pas un langage précis. Chacun peut trouver sa façon d'écrire son pseudo-code mais celui-ci doit quand même suivre une certaine structure.

_Structure d’un pseudo-code :_
Algorithme Puissance
// algorithme qui indique si une personne est majeure ou mineure
Variables
age : entier;
Début
Ecrire “Quel est votre âge ?”
age ← Saisie();
Si age<18 Alors
Afficher (“Vous êtes mineur !”);
Sinon
Afficher (“Vous êtes majeur !”);
FinSi
Fin

On remarque qu'ici chaque instruction se termine par ";" mais puisque c'est un pseudo-code, le ";" n'est pas nécessaire.  
On aurait aussi très bien pu écrire le pseudo-code de cette manière :

    Algorithme Puissance
    // algorithme qui indique si une personne est majeure ou mineure
    Variables
        age : entier
    Début
    	ECRIRE “Quel est votre âge ?”
        LIRE age
        SI age<18 ALORS
            Ecrire “Vous êtes mineur !”
        SINON
            Ecrire “Vous êtes majeur !”
        FINSI
    Fin

- Entête : On y indique le nom de l'algorithme, et ce qu'il fait. Dans certains pseudo-code il n'y a pas d'entête, mais c'est toujours mieux de la préciser !
- Déclaration des variables : On y retrouve le nom des variables ainsi que leurs types.
- Corps : il commence toujours par "DEBUT" et se termine toujours par "FIN". C'est ici que l'on écrit les différentes étapes de l'algorithme.
