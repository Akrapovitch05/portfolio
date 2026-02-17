# CAHIER DES CHARGES TECHNIQUE ET FONCTIONNEL
## PROJET : DIGITALISATION GLOBALE - H TRANSPORT

**Auteur :** Akram KIBOUT
**Date :** 17 Février 2026
**Version :** 1.0
**Statut :** Document de Référence / Portfolio Technique

---

## 1. PRÉSENTATION DU PROJET

### 1.1. Contexte de l'Entreprise
**H TRANSPORT** est une société de transport et de logistique basée en région lyonnaise (69), spécialisée dans la livraison du dernier kilomètre (LAD), l'affrètement et la sous-traitance pour des géants du e-commerce (Amazon, Vinted, Colis Privé, Paack).
En pleine croissance, l'entreprise faisait face à une complexité administrative croissante : gestion manuelle des chauffeurs, suivi de flotte sur fichiers Excel, calculs de paie fastidieux et risques d'erreurs liés à la ressaisie de données.

### 1.2. Objectifs du Projet
L'objectif de cette mission, réalisée dans le cadre de mon alternance (Bachelor Concepteur d'Application), était de concevoir et développer **"from scratch"** une solution Web complète (ERP/CRM sur-mesure) pour :
1.  **Centraliser la donnée** : RH, Flotte, Exploitation, Facturation.
2.  **Automatiser les processus** : Paie, Contrats, Alertes maintenance.
3.  **Fiabiliser les suivis** : Rentabilité en temps réel, traçabilité des tournées.
4.  **Digitaliser la relation chauffeur** : Espace personnel, signature électronique.

---

## 2. ARCHITECTURE TECHNIQUE

Le choix technologique s'est porté sur une stack robuste, moderne et maintenable, adaptée aux contraintes de production et d'évolutivité.

### 2.1. Stack Technologique (Backend & Frontend)
*   **Langage** : PHP 8.1+ (Typage fort, Attributs, Enums).
*   **Framework** : **Symfony 6.4** (LTS). Choisi pour sa robustesse, son injection de dépendance et son écosystème mature.
*   **Interface d'Administration** : **EasyAdmin 4**. Personnalisation poussée (Overriding de templates, Field Types custom) pour un CRUD rapide et une UX professionnelle.
*   **Frontend Client** : Twig, Bootstrap 5, JavaScript (Vanilla + Stimulus).
*   **Base de Données** : MySQL / MariaDB via **Doctrine ORM**.
*   **Gestion de Dépendances** : Composer.
*   **Asset Management** : Webpack Encore (pour l'optimisation des JS/CSS).

### 2.2. Bibliothèques Clés & Intégrations
*   **PDF Manipulation** : `setasign/fpdf` & `setasign/fpdi` pour la génération dynamique de contrats et fiches de paie.
*   **OCR & Parsing** : `smalot/pdfparser` pour l'extraction de données depuis les documents uploadés.
*   **Visualisation de Données** : `symfony/ux-chartjs` pour les tableaux de bord interactifs (KPIs, Graphiques de rentabilité).
*   **Mailing** : Symfony Mailer (envoi de contrats, notifications).

### 2.3. Architecture Serveur
*   **Hébergement** : Serveur Web (Apache/Nginx).
*   **Sécurité** : Pare-feu applicatif, Certificat SSL (HTTPS), Gestion fine des rôles (`ROLE_ADMIN`, `ROLE_USER`, `ROLE_CHAUFFEUR`).

---

## 3. FONCTIONNALITÉS DÉTAILLÉES PAR MODULE

L'application se découpe en 5 modules interconnectés.

### 3.1. MODULE RH (Ressources Humaines)
Ce module est le cœur de la gestion du personnel roulant.

*   **Gestion des Chauffeurs** :
    *   Fiche complète : État civil, Coordonnées, Permis, RIB.
    *   Suivi du statut : Actif, Inactif, En arrêt, Démissionnaire.
    *   Historique des affectations de véhicules.
*   **Gestion Contractuelle (Signature Électronique)** :
    *   **Génération PDF** : Création automatique des Contrats de Travail (CDI/CDD) remplis avec les données de la base.
    *   **Workflow de Signature** :
        *   Interface de signature manuscrite (Canvas HTML5).
        *   Double signature : Employé + Employeur (Auto-signature validée).
        *   Horodatage et scellement du PDF final.
*   **Gestion de la Paie (Avancée)** :
    *   **Calcul Automatisé** : Moteur de calcul basé sur les barèmes (voir 3.3).
    *   **Gestion des Acomptes** : Saisie, validation et déduction automatique du salaire net.
    *   **Primes & Missions** : Ajout de primes exceptionnelles ou récurrentes.
    *   **Fiches de Paie** : Génération et archivage.
*   **Espace "Mon Espace" (Extranet Chauffeur)** :
    *   Accès sécurisé pour chaque chauffeur.
    *   Consultation des plannings et historiques.
    *   Accès aux documents personnels (Contrats, Bulletins).

### 3.2. MODULE GESTION DE FLOTTE
Permet un suivi précis du parc automobile (Coût TCO).

*   **Inventaire Parc** :
    *   Gestion des Véhicules : Immatriculation, Marque, Modèle, VIN.
    *   **Classification** : Volume (3m³, 12m³, 20m³...), Type (Frigo, Sec).
    *   Statut : Disponible, En panne, Vendu.
*   **Assignation Intelligente** :
    *   Lien Chauffeur ↔ Véhicule.
    *   Historique complet : "Qui conduisait quoi et quand ?".
    *   Détection des incohérences (ex: Un chauffeur assigné à 2 véhicules le même jour).
*   **Suivi des Incidents** :
    *   Module `ProblemeVehicule` : Signalement de pannes, suivi des réparations.
    *   Upload de photos/constats directement depuis mobile.

### 3.3. MODULE EXPLOITATION & TOURNÉES
Le cœur opérationnel du système permettant le suivi quotidien de l'activité.

*   **Saisie Journalière des Tournées** :
    *   **Formulaires Dynamiques** : Adaptation des champs de saisie selon le marché (Amazon, Vinted, LAD, Paack, etc.).
    *   **Métriques de Performance (KPIs)** :
        *   Saisie détaillée : Colis Livrés, Ramasses, Relais, Echecs.
        *   Calcul automatique des points : "Points LAD" (pour le calcul de la prime panier).
    *   **Gestion des Marchés** :
        *   Multimarques : Support natif et extensible de nouveaux clients.
        *   Tarification Dynamique : Moteur de règles (Barèmes) associant un prix unitaire à chaque métrique par marché.
*   **Tableaux de Bord de Rentabilité** :
    *   Vue Mensuelle / Hebdomadaire.
    *   **Calcul de marge** : (Chiffre d'Affaires Tournée) - (Coûts Salariaux + Carburant).
    *   **Gestion des Primes Panier** :
        *   Règle métier complexe : Attribution automatique si >20 points LAD ou >80€ de CA.
        *   Possibilité de forçage manuel par le superviseur.
*   **Suivi Carburant** :
    *   Import / Saisie des coûts carburant par véhicule/tournée pour un calcul précis du TCO.

### 3.4. MODULE GESTION DOCUMENTAIRE (GED)
Une solution centralisée pour dématérialiser l'archivage papier.

*   **Classification Intelligente** :
    *   Types de documents : PV, Constat Amiable, Facture, Carte Grise, Assurance.
    *   Liaison : Association automatique d'un document à un Chauffeur ou un Véhicule.
*   **Batch Upload (Traitement par lot)** :
    *   Interface d'upload de masse pour les scans quotidiens.
    *   Pré-traitement : Renommage automatique, Slugification.
    *   **Workflow de classement** : "À classer" -> "Validé".
*   **Recherche & Archivage** :
    *   Moteur de recherche multicritères (Date, Type, Entité liée).
    *   Sécurisation des accès (seul le propriétaire ou l'admin peut voir).

### 3.5. MODULE ADMINISTRATIF & SEO
Optimisation de la visibilité et conformité légale.

*   **Référencement Naturel (SEO)** :
    *   Architecture sémantique (HTML5).
    *   Optimisation des Balises Meta (Description, Keywords "transport lyon", OpenGraph).
    *   Stratégie de mots-clés : Positionnement sur les requêtes locales transport/logistique.
    *   Performance : Score Lighthouse optimisé, chargement rapide (Lazy loading).
*   **Conformité RGPD & Légale** :
    *   Pages Mentions Légales dynamiques.
    *   Gestion du consentement (Cookies).
    *   Droit à l'oubli (Suppression compte chauffeur).

---

## 4. DÉFIS TECHNIQUES ET SOLUTIONS

Durant le développement, plusieurs challenges majeurs ont été relevés :

1.  **Complexité du Calcul de Paie** :
    *   *Challenge* : Adapter le salaire en fonction de règles métiers changeantes (Barèmes) et de primes conditionnelles (Panier repas).
    *   *Solution* : Création d'un Service de Paie dédié (`PayrollService`) découplant la logique comptable de l'affichage. Utilisation de Vues SQL (`v_salaire_journalier`) pour pré-calculer les agrégats lourds et garantir la performance du Dashboard.

2.  **Gestion de la Signature Électronique** :
    *   *Challenge* : Garantir l'intégrité du document signé et gérer le double flux (Employé -> Employeur).
    *   *Solution* : Implémentation de `FPDI` pour superposer les signatures (images base64) sur le PDF original à des coordonnées précises, avec horodatage serveur.

3.  **Expérience Utilisateur (UX) Mobile** :
    *   *Challenge* : Les chauffeurs utilisent l'outil principalement sur smartphone.
    *   *Solution* : Interface "Mobile First" via Bootstrap 5. Adaptation des formulaires EasyAdmin pour l'usage tactile.

---

## 5. BILAN ET PERSPECTIVES

Ce projet, mené de A à Z (**Full Stack**), a permis à **H Transport** de passer d'une gestion artisanale à une **ERP Professionnel**. 

### Gains constatés :
*   **Gain de temps** : -30% de temps administratif (saisie paie).
*   **Fiabilité** : Disparition des erreurs de calcul manuel.
*   **Transparence** : Les chauffeurs ont accès à leurs données en temps réel, réduisant les litiges.

### Évolutions futures envisagées :
*   Application Mobile native (PWA).
*   API pour connexion directe avec les donneurs d'ordres (Amazon Logistics API).
*   IA pour la reconnaissance automatique des tickets de carburant.
