---
id: fonction_exercices
title: Exercices sur les Fonctions
sidebar_label: Exercices
---

Voici quelques exercices corrigés pour t'entrainer sur les fonctions.

---

## Exercice 1

Ecrire une fonction qu'on nommera poly qui prend en entrée un nombre x et qui renvoie le résultat de **3x²+4x-5**:

<details>
<summary>**Correction possible**</summary>
	
	FONCTION Poly(x: réel) : réel
    somme ← 0 : réel
    Début
        somme ← somme + (3 * x * x)
        somme ← somme + (4 * x)
        somme ← somme - 5
        RETOURNER somme
    FinFonction

</details>

<details>
<summary>**Autre correction possible**</summary>
	
	FONCTION Poly(x: réel) : réel
    somme ← 0 : réel
    resultat ← (3 * x * x) + (4 * x) - 5 : réel
    Début
        TANT QUE somme INFERIEUR STRICT A resultat
            somme ← somme + 1
        FINTANTQUE
        RETOURNER somme
    FinFonction

</details>

---

## Exercice 2

Ecrire une fonction qu'on nommera volume qui prend en entrée trois nombres longueur, largeur et hauteur (dans cet ordre) et qui renvoie le **volume** d'un pavé droit avec ces dimensions si le volume est inférieur à 100, et renvoie -1 sinon:

<details>
<summary>**Autre correction possible**</summary>
	
	FONCTION Volume(longueur: réel, largeur: réel, hauteur: réel) : réel
    resultat ← 1 : réel
    Début
        resultat ← resultat * longueur
        resultat ← resultat * largeur
        resultat ← resultat * hauteur
        SI resultat SUPERIEURE A 100
            resultat ← -1 
        FINSI
        RETOURNER resultat
    FinFonction

</details>

<details>
<summary>**Correction possible**</summary>
	
	FONCTION Volume(longueur: réel, largeur: réel, hauteur: réel) : réel
    resultat ← -1 : réel
    volume ← longueur * largeur * hauteur : réel
    Début
        SI volume INFERIEUR A 100
            resultat ← volume
        FINSI 
        RETOURNER resultat
    FinFonction

</details>

## Exercice 3

Supposez que vous ayez une fonction random qui renvoie "PILE" ou "FACE" de manière complètement aléatoire.

Ecrire une fonction nommée lancer qui simule n lancer de dés, et qui prend en paramètre estPile. Si estPile est vrai, alors elle retourne le nombre de fois que pile a été obtenu, sinon, elle retourne le nombre de fois ou face a été obtenu:

<details>
<summary>**Correction possible**</summary>
	
	FONCTION Lancer(n: réel, estPile: booleen) : réel
    somme ← 0 : réel
    i ← 1 : réel
    lancer ← "" : chaine de caractères
    Début
        TANT QUE i INFERIEUR A N
            lancer = random()
            SI lancer EST "PILE" ALORS
                SI estPile EST VRAI ALORS
                    somme ← somme + 1
                FINSI 
            SINON
                SI estPile EST FAUX ALORS
                    somme ← somme + 1
                FINSI
            FINSI
        FINTANTQUE
        RETOURNER somme
    FinFonction

</details>

<details>
<summary>**Autre correction possible**</summary>
	
	FONCTION Lancer(n: réel, estPile: booleen) : réel
    somme ← 0 : réel
    i ← 0 : réel
    lancer ← "" : chaine de caractères
    Début
        REPETER
            lancer = random()
            SI lancer EST "FACE" ET estPile EST FAUX ALORS
                somme ← somme + 1
            SINON
                SI lancer EST "PILE" ET estPile EST VRAI ALORS
                    somme ← somme + 1
                FINSI
            FINSI
        TANT QUE i INFERIEUR STRICT A n
        FINTANTQUE
        RETOURNER somme
    FinFonction

</details>
