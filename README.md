# Organigramme D3.js avec Docker

Un organigramme interactif créé avec D3.js et déployé via Docker Compose.

## Structure de l'Organisation

### Niveau 1
- **Conseil** (Responsables de pôles bénévoles – arbitrage / priorisation)

### Niveau 2 - Pôles
- **Pôle Logistique** - Type Support
- **Pôle Production Alimentaire** - Type Opérationnel
- **Pôle Maraudes** - Type Opérationnel (13 équipes)
- **Pôle Social** - Type Opérationnel
- **Pôle Comptabilité** (Finance) - Type Support
- **Pôle Vestimentaire** - Type Opérationnel

## Fonctionnalités

- Organigramme hiérarchique interactif
- Codes couleur par type de pôle :
  - 🔵 Bleu : Conseil
  - 🟣 Violet : Pôles Support
  - 🟢 Vert : Pôles Opérationnels
- Tooltips informatifs au survol
- Animations fluides
- Design responsive
- Légende interactive

## Prérequis

- Docker
- Docker Compose

## Installation et Lancement

1. Cloner ou télécharger le projet

2. Lancer l'application avec Docker Compose :
```bash
docker-compose up -d
```

3. Ouvrir votre navigateur à l'adresse :
```
http://localhost:8080
```

4. Pour arrêter l'application :
```bash
docker-compose down
```

## Structure du Projet

```
Organigramme/
├── docker-compose.yml          # Configuration Docker
├── README.md                   # Documentation
├── .gitignore                  # Fichiers à ignorer
└── src/                        # Code source
    ├── index.html              # Page HTML principale
    ├── organigramme.js         # Logique D3.js
    └── style.css               # Styles CSS
```

## Personnalisation

### Modifier la structure de l'organigramme

Éditez le fichier [src/organigramme.js](src/organigramme.js) et modifiez l'objet `data` :

```javascript
const data = {
    name: "Conseil",
    type: "conseil",
    description: "Description",
    children: [
        {
            name: "Nouveau Pôle",
            type: "operational", // ou "support"
            description: "Description du pôle"
        }
    ]
};
```

### Modifier les couleurs

Éditez la fonction `getColor()` dans [src/organigramme.js](src/organigramme.js) et les classes CSS correspondantes dans [src/style.css](src/style.css).

### Modifier le port

Éditez [docker-compose.yml](docker-compose.yml) et changez la ligne :
```yaml
ports:
  - "8080:80"  # Changez 8080 par le port souhaité
```

## Technologies Utilisées

- **D3.js v7** : Bibliothèque de visualisation de données
- **Nginx Alpine** : Serveur web léger
- **Docker Compose** : Orchestration des conteneurs

## Support

Pour toute question ou problème, veuillez créer une issue dans le dépôt du projet.

## Licence

Ce projet est libre d'utilisation.
