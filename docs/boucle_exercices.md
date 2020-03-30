---
id: boucle_exercices
title: Exercices sur les Boucles
sidebar_label: Exercices
---

Voici quelques exercices corrigés pour t'entrainer sur les boucles.

---

## Exercice 1

Ecrire l'algorithme permettant d'afficher la table de multiplication par 9.

<details>
<summary>**Correction possible**</summary>
	
	ALGORITHME Table Multi
    var i : entier
    DEBUT
        POUR i DE 1 A 10 FAIRE
            ECRIRE(i*9)
        FINPOUR
    FIN

</details>

<details>
<summary>**Autre correction possible**</summary>
	
	ALGORITHME Table Multi
    var i : entier = 1
    DEBUT
        TANT QUE i INFERIEUR STRICT A 10
            ECRIRE(i*9)
            i ← i + 1
        FINTANTQUE
    FIN

</details>

---

## Exercice 2

Ecrire un programme qui affiche le plus petit entier n tel que 1² + 2² + 3² + ... + n² dépasse 12345:

<details>
<summary>**Correction possible**</summary>
	
	Variables n, somme en Entier
    Debut
        n ← 0
        somme ← 0
        TANT QUE somme INFERIEUR STRICT A 12345:
            n ← n + 1
            somme ← somme + (n*n)
        Ecrire n
        FINTANTQUE
    FIN

</details>

<details>
<summary>**Autre correction possible**</summary>
	
	Variables n, somme en Entier
    Debut
        n ← 0
        somme ← 0
        REPETER
            n ← n + 1
            somme ← somme - (n*n)
        TANT QUE somme SUPERIEURE A 0
        Ecrire n
        FINTANTQUE
    FIN

</details>

## Exercice 3

Ecrire un algorithme qui demande successivement 20 nombres à l’utilisateur, et qui lui dise
ensuite quel était le plus grand parmi ces 20 nombres :

**Correction vidéo**

[<img src="http://i3.ytimg.com/vi/6dpJSOSDKXA/hqdefault.jpg">](https://www.youtube.com/watch?v=6dpJSOSDKXA)

<details>
<summary>**Correction possible**</summary>
	
	VARAIBLES N, i, PG en Entier
    DEBUT
    PG ← 0
    POUR i ← 1 A 20
        Ecrire "Entrez un nombre : "
        Lire N
        Si i = 1 ou N > PG ALORS
            PG ← N
        FinSi
    i SUIVANT
    ECRIRE "Le nombre le plus grand était : ", PG
    FIN

</details>

<details>
<summary>**Autre correction possible**</summary>
	
	VARIABLES N, i, PG en Entier
    DEBUT
        PG ← -1
        i ← 1
        REPETER
            Ecrire "Entrez un nombre : "
            Lire N
            PG ← MAXIMUM(PG, N)
        TANT QUE i INFERIEUR A 20
        FINTANTQUE
        ECRIRE "Le nombre le plus grand était : ", PG
    FIN

</details>
