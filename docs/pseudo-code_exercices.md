---
id: pseudo-code_exercices
title: Exercices sur les pseudo-codes
sidebar_label: Exercices
---

Voici quelques exercices corrigés pour t'entrainer sur les algorithmes.

---

## Exercice 1

Que fait cet algorithme ?

    Variable
    N : entier
    Debut
    N ← 0
    Ecrire "Entrez un nombre entre 1 et 3"
    TantQue N < 1 ou N > 3
    	Lire N
    	Si N < 1 ou N > 3 Alors
    		Ecrire "Saisie erronée. Recommencez”
    	FinSi
    FinTantQue
    Fin

<details>
<summary>**Correction possible**</summary>

Cet algorithme demande à l’utilisateur un nombre compris entre 1 et 3 jusqu’à ce que la réponse convienne.

</details>

---

## Exercice 2

Si on fait s’exécuter cet algorithme en lui donnant en entrée les valeurs 3, 7 et 12, qu’est-ce que l’algorithme affichera comme sortie ?

    Variables :
    type entier : a, b, c
    a ← 0
    b ← 0
    c ← 0
    Écrire « Entrer trois valeurs entières. »
    Lire a, b, c
    b ← a
    c ← a
    a ← b + c * 2
    Écrire « Le résultat est : », a
    Si a égale 8 OU a ≥ 3 alors
    	Écrire « Votez pour Pedro. »
    Sinon si a ≥ 7
    	Écrire « ¡Hola! »
    FinSi

<details>
<summary>**Correction possible**</summary>

L'algorithme affichera :
Le résultat est : 9
Votez pour Pedro.

</details>

---

## Exercice 3

Ecrire un programme en pseudo-code qui lit le prix HT d’un article, le nombre d’articles et le taux de TVA, et qui fournit le prix total TTC correspondant. Faire en sorte que des libellés apparaissent clairement.

<details>
<summary>**Correction possible**</summary>
	
	Variables nb, pht, ttva, pttc en Numérique
	Début
	Ecrire « Entrez le prix hors taxes: »
	Lire pht
	Ecrire « Entrez le nombre d’articles: »
	Lire nb
	Ecrire « Entrez le taux de TVA: »
	Lire ttva
	pttc <- pht * nb * ttva
	Ecrire pttc

</details>
