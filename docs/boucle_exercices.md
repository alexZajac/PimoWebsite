---
id: boucle_exercices
title: Exercices sur l'Algorithmie - Boucles
sidebar_label: Exercices
---

Voici quelques exercices corrigés pour t'entrainer sur les algorithmes.

---


## Exercices 1

Ecrire l'algorithme permettant d'afficher la table de multiplication par 9.

<details>
<summary>**Correction**</summary>
	
	ALGORITHME Table Multi
    var i : entier
    DEBUT
    POUR i DE 1 A 10 FAIRE
    ECRIRE(i*9)
    FINPOUR
    FIN

</details>


---
## Exercice 2

Ecrire un algorithme qui demande successivement 20 nombres à l’utilisateur, et qui lui dise
ensuite quel était le plus grand parmi ces 20 nombres :

<details>
<summary>**Correction**</summary>
	
	Variables N, i, PG en Entier
    Debut
    PG ← 0
    Pour i ← 1 à 20
        Ecrire "Entrez un nombre : "
        Lire N
        Si i = 1 ou N > PG Alors
            PG ← N
        FinSi
    i Suivant
    Ecrire "Le nombre le plus grand était : ", PG
    Fin

</details>





