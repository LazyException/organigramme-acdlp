// Périmètres des pôles
const polePerimeters = {
    "Conseil d'Administration": {
        responsible: null,
        tasks: [
            "Constitué du Président, du Trésorier et du Secrétaire",
            "Définit la stratégie globale de l'association",
            "Prend les décisions majeures concernant l'organisation",
            "Veille au bon fonctionnement de l'association",
            "Valide les orientations proposées par le Conseil"
        ],
        processes: [
            "Process de convocation des réunions du CA",
            "Process de prise de décision (vote, quorum)",
            "Process de validation des budgets",
            "Process de suivi des décisions prises"
        ]
    },
    "Président": {
        responsible: "Rachid BOULSANE",
        tasks: [
            "Garant des valeurs de l'association",
            "Le président représente l’association dans tous les actes de la vie civile : signature de contrats, représentation auprès des partenaires, banques, administrations, et en justice si nécessaire.",
            "Il veille à l’exécution des décisions prises par l’Assemblée générale et le Conseil d’administration, coordonne l’action du bureau et garantit la cohérence entre la stratégie décidée et les actions menées.",
            "Le président s’assure du respect des statuts, du règlement intérieur et de la loi, convoque et préside les réunions statutaires, et agit pour préserver l’intérêt général et la pérennité de l’association."
        ],
        processes: []
    },
    "Trésorier": {
        responsible: "Shazad GHULAM",
        tasks: [
            "Tenir la comptabilité de l'association",
            "Gérer la trésorerie et superviser les flux financiers",
            "Préparer et suivre le budget annuel",
            "Établir les comptes annuels et le bilan financier",
            "Présenter les rapports financiers au Conseil et à l'Assemblée Générale",
            "Assurer la transparence financière auprès des membres et des donateurs",
            "Veiller au respect des obligations comptables",
            "Gérer les relations avec les banques et les organismes financiers"
        ],
        processes: []
    },
    "Secrétaire": {
        responsible: "Umaran RANA",
        tasks: [
            "Rédiger et archiver les comptes rendus des réunions (CA, AG, bureau)",
        ],
        processes: []
    },
    "Directeur": {
        responsible: "Rachid BOULSANE",
        tasks: [
            "Assure la direction opérationnelle de l'association",
            "Coordonne l'ensemble des pôles et leurs activités",
            "Met en œuvre les décisions du Conseil d'execution",
            "Représente l'association dans les relations extérieures",
            "Supervise le bon fonctionnement quotidien de l'association",
            "Anime le Conseil et facilite la prise de décision collective",
            "Création groupe Whatsapp",
            "Contrôle la conformité administrative de chaque pôle",
        ],
        processes: [
            "Process de coordination inter-pôles",
            "Process de reporting au Conseil d'Administration",
            "Process de gestion des urgences opérationnelles"
        ]
    },
    "Conseil": {
        responsible: null,
        tasks: [
            "Réunit tous les responsables de pôles et d'autres membres élus, 1 fois par mois",
            "Relation avec le référent religieux Direction"
        ],
        processes: [
            "Process de remontée des sujets au Conseil",
            "Process de priorisation des décisions",
            "Process de validation (majorité / quorum)",
            "Process de décision urgente (hors réunion mensuelle)"
        ]
    },
    "Pôle Logistique": {
        responsible: "Abdallah EL YOUSFI",
        tasks: [
            "Suivi véhicule",
            "Accident véhicule",
            "Achat matériel",
            "Contact fournisseur d'énergie",
            "Maintenance véhicule",
            "Maintenance locaux",
            "Travaux locaux",
            "Travaux appartement ACDLP",
            "Recharge tracker/caméra"
        ],
        processes: [
            "Process de déclaration de sinistre véhicule",
            "Process de déclaration de sinistre local",
            "Process de remontée d'incident matériel",
            "Process de suivi et clôture du sinistre",
            "Process d'expression du besoin",
            "Process de mise en concurrence (si applicable)",
            "Process de validation par la Trésorerie / Conseil",
            "Process de contractualisation",
            "Process d'évaluation du prestataire"
        ]
    },
    "Pôle Comptabilité": {
        responsible: "Shazad GHULAM",
        tasks: [
            "MyAmana Trésorerie",
            "Remise de chèque",
            "Gestion de l'espèce",
            "Paiement fournisseurs",
            "Paiement salaire",
            "Achat internet",
            "Relation donateur"
        ],
        processes: [
            "Process de demande de paiement",
            "Process de validation budgétaire",
            "Process de contrôle des justificatifs",
            "Process d'exécution du paiement",
            "Process d'archivage comptable"
        ]
    },
    "Pôle Communication": {
        responsible: "Bilal DESTOUCHES",
        tasks: [
            "Newsletter",
            "Gestion des réseaux sociaux",
            "Infos maraudes",
            "Document de présentation de l'association",
            "Vidéo pour ACDLP",
            "Shooting photo ACDLP",
            "Gestion des campagnes",
            "Gestion site internet"
        ],
        processes: [
            "Process de proposition de contenu",
            "Process de validation éditoriale",
            "Process de publication (qui, quand, où)",
            "Process de gestion des commentaires / messages",
            "Process de communication de crise"
        ]
    },
    "Pôle RH": {
        responsible: "Umaran RANA (Interim)",
        tasks: [
            "Animation pendant les réunions bénévoles",
            "Document interne (contrat de travail)",
            "Campagne de recrutement bénévoles (en lien avec le pôle communication)",
            "Communication aux bénévoles",
            "Suivi de l'intégration des bénévoles"
        ],
        processes: [
            "Process d'identification du besoin",
            "Process de diffusion de l'annonce",
            "Process de sélection / entretien",
            "Process de validation (RH + Conseil si salarié)",
            "Process d'intégration (onboarding)",
            "Process de demande de congés",
            "Process de validation",
            "Process de mise à jour du planning",
            "Process de gestion des absences urgentes"
        ]
    },
    "Pôle DSI": {
        responsible: "Rachid BOULSANE (Interim)",
        tasks: [
            "Administration du site internet",
            "Administration du Mailjet",
            "Administration des outils externes (Myamana)",
            "Administration de la cantine, suivi du véhicule, ouverture de portail, modification des quantités",
            "Administration de l'hébergeur et des noms de domaines",
            "Administration des boites mail",
            "Administration de l'Intranet"
        ],
        processes: [
            "Questionnaire Préparatoire SI"
        ]
    },
    "Pôle Production": {
        responsible: "Yassine MELHAF",
        tasks: [
            "Ramasse Production",
            "Achat des denrées",
            "Achat des denrées inter Assos",
            "Gestion des salariés",
            "Gestion des collectes (pex ex Rungis, magasins, autre..."
        ],
        processes: [
            "Process de planification des repas",
            "Process d'approvisionnement des matières premières",
            "Process de production en cuisine",
            "Process de respect des normes d'hygiène",
            "Process de gestion des quantités",
            "Process de stockage / conservation",
            "Process de remise aux maraudes / distributions",
            "Process de gestion des incidents sanitaires"
        ]
    },
    "Pôle Maraudes": {
        responsible: "Rachid BOULSANE (Interim)",
        tasks: [
            "Assure la Communication Interne avec toutes les équipes de maraudes",
            "Se met en lien avec le Pôle production pour assurer l'approvisionnement des maraudes",
            "S'assurer du bon fonctionnement des maraudes (réunions avec les responsable, contrôle de maraudes...", 
        ],
        processes: [
            "Process de planification des maraudes",
            "Process de constitution des équipes",
            "Process de départ en maraude",
            "Process de remontée terrain",
            "Process de gestion des urgences",
            "Process de fin de maraude (bilan)",
            "Process de coordination avec le pôle Production"
        ]
    },
    "Pôle Social": {
        responsible: "Umaran RANA",
        tasks: [
            "Gestion Mise à l'hôtel",
            "Suivi épicerie",
            "Suivi des familles",
            "Aide financière",
            "Prévient les dérives de collecte de Zakat",
            "Veille pour trouver des leviers de dépenses de Zakat",
            "Pilote le Comité Zakat",
            "Traite les demandes de Zakat émanant des différents Pôles Opérationnels",
            "Se met en lien avec le Pôle Comptabilité pour veiller à la séparation des biens",
            "Se met en lien avec le Référent religieux pour les cas problématiques"
        ],
        processes: [
            "Process d'accueil d'une nouvelle famille",
            "Process d'évaluation sociale",
            "Process d'attribution des aides",
            "Process de suivi régulier",
            "Process de réévaluation de la situation",
            "Process de sortie de dispositif",
            "Process de coordination avec Zakat / Vestimentaire / Hébergement",
            "Process de confidentialité",
            "Process de dépôt de demande de Zakat",
            "Process d'analyse d'éligibilité",
            "Process de validation (commission / référents)",
            "Process de versement de la Zakat",
            "Process de suivi post-attribution",
            "Process de confidentialité et protection des données"
        ]
    },
    "Pôle Vestimentaire": {
        responsible: "Yassine FATHI",
        tasks: [
            "Distribution de vêtements",
            "Gestion du stock vestimentaire / hygiène",
            "Collaboration vestimentaire cantine"
        ],
        processes: [
            "Process de réception des demandes",
            "Process de validation du besoin",
            "Process de préparation des lots",
            "Process de planification de la distribution",
            "Process de distribution sur site",
            "Process de distribution lors d'événements",
            "Process de traçabilité des dons",
            "Process de gestion des stocks",
            "Process de tri / recyclage"
        ]
    },
    "Pôle Inter Asso": {
        responsible: "Bilal DESTOUCHES (Interim)",
        tasks: [
            "Se met en lien avec le Pôle Production pour assurer l'approvisionnement des Cantines",
            "Onboarding des nouvelles assos",
            "S'assure de la signature de la charte",
            "Assure la communication avec les associations",
            "Pilote tout type d'actions de collaboration avec d'autres associations"
        ],
        processes: [
            "Process de référencement des associations partenaires",
            "Process de convention / partenariat",
            "Process de suivi des besoins des cantines",
            "Process de planification des livraisons",
            "Process de remontée d'information des partenaires",
            "Process d'évaluation du partenariat",
            "Process de renouvellement ou arrêt"
        ]
    },
    "Pôle Enfance": {
        responsible: "Ali ISAVUDEEN",
        tasks: [
            "Organisation de la distribution de fournitures scolaires"
        ],
        processes: []
    },
    "Responsable de Site": {
        responsible: "Latifa FATINI",
        tasks: [],
        processes: [],
        fichPoste: "https://docs.google.com/document/d/1K6bNURtH5P9S5vSe0IKKGf52KtHNLJA7tS8jnm81s2U/edit?usp=sharing"
    },
    "Agent Polyvalent": {
        responsible: "Abdoulkarim TOUNKARA",
        tasks: [],
        processes: [],
        fichPoste: "https://docs.google.com/document/d/1neYpPWTlV8JL36mzZknHSXUvTrdVGRsxktf6nLuHi10/edit?usp=drive_link"
    },
    "Chef": {
        responsible: "Bambi",
        tasks: [],
        processes: [],
        fichPoste: "https://docs.google.com/document/d/1J9y2_VD_6peCM3T7IlPHqdpB22A-Ftfx/edit?usp=sharing&ouid=107183891003366853323&rtpof=true&sd=true"
    },
    "Sous-chef": {
        responsible: "Khadijatou",
        tasks: [],
        processes: [],
        fichPoste: "https://docs.google.com/document/d/1J9y2_VD_6peCM3T7IlPHqdpB22A-Ftfx/edit?usp=sharing&ouid=107183891003366853323&rtpof=true&sd=true"
    },
    "Second de cuisine": {
        responsible: "Yasin",
        tasks: [],
        processes: [],
        fichPoste: "https://docs.google.com/document/d/1iqtaDmU-xA-ejCFAtc3oqLjeTCwaqJMy/edit?usp=drive_link&ouid=107183891003366853323&rtpof=true&sd=true"
    },
    "Commis 1": {
        responsible: "Arouna",
        tasks: [],
        processes: [],
        fichPoste: "https://docs.google.com/document/d/1CaJtYxPrz--0OEf8eSbIDamE8aTPjgupaBjYPjokWHg/edit?usp=drive_link"
    },
    "Commis 2": {
        responsible: "Kenzo",
        tasks: [],
        processes: [],
        fichPoste: "https://docs.google.com/document/d/1CaJtYxPrz--0OEf8eSbIDamE8aTPjgupaBjYPjokWHg/edit?usp=drive_link"
    },
    "Commis 3": {
        responsible: "À définir",
        tasks: [],
        processes: [],
        fichPoste: "https://docs.google.com/document/d/1CaJtYxPrz--0OEf8eSbIDamE8aTPjgupaBjYPjokWHg/edit?usp=drive_link"
    }
};

// Données de l'organigramme
const treeData = {
    name: "",
    type: "invisible",
    children: [
        {
            name: "Trésorier",
            title: "Shazad GHULAM",
            responsible: "Shazad GHULAM",
            type: "ca-member"
        },
        {
            name: "Président",
            title: "Rachid BOULSANE",
            responsible: "Rachid BOULSANE",
            type: "ca-member",
            children: [
                {
                    name: "Directeur",
                    title: "Direction Générale",
                    responsible: "Rachid BOULSANE",
                    type: "directeur",
                    children: [
                        {
                            name: "Pôle Logistique",
                            title: "Support",
                            responsible: "Abdallah EL YOUSFI",
                            type: "pole"
                        },
                        {
                            name: "Pôle Comptabilité",
                            title: "Finance",
                            subtitle: "Support",
                            responsible: "Shazad GHULAM",
                            type: "pole"
                        },
                        {
                            name: "Pôle Communication",
                            title: "Support",
                            responsible: "Bilal DESTOUCHES",
                            type: "pole"
                        },
                        {
                            name: "Pôle RH",
                            title: "Ressources Humaines",
                            subtitle: "Support",
                            responsible: "Umaran RANA",
                            type: "pole"
                        },
                        {
                            name: "Pôle DSI",
                            title: "Système d'Information",
                            subtitle: "Support",
                            responsible: "Rachid BOULSANE",
                            type: "pole",
                            isNew: true
                        },
                        {
                            name: "Pôle Production",
                            title: "Alimentaire",
                            subtitle: "Opérationnel",
                            responsible: "Yassine MELHAF",
                            type: "pole",
                            isNew: true,
                            children: [
                                {
                                    name: "Responsable de Site",
                                    title: "Site",
                                    responsible: "Latifa FATINI",
                                    type: "subteam"
                                },
                                {
                                    name: "Agent Polyvalent",
                                    title: "Support",
                                    responsible: "Abdoulkarim TOUNKARA",
                                    type: "subteam"
                                },
                                {
                                    name: "Chef",
                                    title: "Cuisine",
                                    responsible: "Bambi",
                                    type: "subteam",
                                    children: [
                                        {
                                            name: "Sous-chef",
                                            title: "Cuisine",
                                            responsible: "Khadijatou",
                                            type: "subteam",
                                            children: [
                                                {
                                                    name: "Second de cuisine",
                                                    title: "Cuisine",
                                                    responsible: "Yasin",
                                                    type: "subteam",
                                                    children: [
                                                        {
                                                            name: "Commis 1",
                                                            title: "Cuisine",
                                                            responsible: "Arouna",
                                                            type: "subteam"
                                                        },
                                                        {
                                                            name: "Commis 2",
                                                            title: "Alternant",
                                                            responsible: "Kenzo",
                                                            type: "subteam"
                                                        },
                                                        {
                                                            name: "Commis 3",
                                                            title: "Cuisine",
                                                            responsible: "À définir",
                                                            type: "subteam"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Pôle Maraudes",
                            title: "13 équipes",
                            subtitle: "Opérationnel",
                            responsible: "Yassine MELHAF",
                            type: "pole",
                            isNew: true
                        },
                        {
                            name: "Pôle Social",
                            title: "Opérationnel",
                            responsible: "Umaran RANA",
                            type: "pole"
                        },
                        {
                            name: "Pôle Vestimentaire",
                            title: "Opérationnel",
                            responsible: "Yassine FATHI",
                            type: "pole"
                        },
                        {
                            name: "Pôle Inter Asso",
                            title: "Opérationnel",
                            responsible: "Bilal DESTOUCHES",
                            type: "pole",
                            isNew: true
                        },
                        {
                            name: "Pôle Enfance",
                            title: "Opérationnel",
                            responsible: "Ali ISAVUDEEN",
                            type: "pole",
                            isNew: true
                        }
                    ]
                }
            ]
        },
        {
            name: "Secrétaire",
            title: "Umaran RANA",
            responsible: "Umaran RANA",
            type: "ca-member"
        }
    ]
};

// Configuration
const container = document.getElementById("organigramme");
const containerWidth = container.clientWidth;
const margin = { top: 60, right: 20, bottom: 50, left: 20 };
const width = Math.max(containerWidth - margin.left - margin.right, 3500); // Largeur minimum de 3500px
const height = 600 - margin.top - margin.bottom;

let i = 0;
const duration = 750;

// Création du SVG avec zoom
const svg = d3.select("#organigramme")
    .append("svg")
    .attr("width", "100%")
    .attr("height", 600)
    .attr("viewBox", `0 0 ${Math.max(containerWidth, 3500)} 600`);

// Ajout du zoom
const zoomBehavior = d3.zoom()
    .scaleExtent([0.3, 3])
    .on("zoom", (event) => {
        g.attr("transform", event.transform);
    });

svg.call(zoomBehavior);

const g = svg.append("g")
    .attr("transform", `translate(${Math.max(containerWidth, 3500)/2},${margin.top})`);

// Création du tree layout
const tree = d3.tree()
    .size([width, height])
    .separation((a, b) => (a.parent === b.parent ? 4 : 5));

// Création de la hiérarchie
const root = d3.hierarchy(treeData);
root.x0 = 0;
root.y0 = 0;

// Fonction pour obtenir la couleur selon le type
function getNodeColor(type, subtitle, title) {
    const colors = {
        'invisible': {
            bg: 'transparent',
            border: 'transparent',
            text: 'transparent'
        },
        'ca': {
            bg: '#1a472a',
            border: '#0d2416',
            text: '#ffffff'
        },
        'ca-member': {
            bg: '#2e7d4e',
            border: '#1a472a',
            text: '#ffffff'
        },
        'directeur': {
            bg: '#2c2c2c',
            border: '#1a1a1a',
            text: '#ffffff'
        },
        'conseil': {
            bg: '#c41e3a',
            border: '#a01729',
            text: '#ffffff'
        },
        'pole': {
            bg: '#2c2c2c',
            border: '#1a1a1a',
            text: '#ffffff'
        },
        'support': {
            bg: '#2c2c2c',
            border: '#1a1a1a',
            text: '#ffffff'
        },
        'operational': {
            bg: '#c41e3a',
            border: '#a01729',
            text: '#ffffff'
        },
        'subteam': {
            bg: '#5a6268',
            border: '#3d4247',
            text: '#ffffff'
        }
    };

    // Pour les pôles, utiliser le subtitle ou le title pour déterminer la couleur
    if (type === 'pole') {
        if (subtitle === 'Support' || title === 'Support' || subtitle === 'Finance') {
            return colors.support;
        } else if (subtitle === 'Opérationnel' || title === 'Opérationnel') {
            return colors.operational;
        }
    }

    return colors[type] || colors.conseil;
}

// Fonction de mise à jour
function update(source) {
    // Calcul du nouveau layout
    const treeData = tree(root);
    const nodes = treeData.descendants();
    const links = treeData.descendants().slice(1);

    // Normaliser la profondeur
    nodes.forEach(d => { d.y = d.depth * 200; });

    // Mise à jour des nœuds
    const node = g.selectAll('g.node')
        .data(nodes, d => d.id || (d.id = ++i));

    // Entrée des nouveaux nœuds
    const nodeEnter = node.enter().append('g')
        .attr('class', 'node')
        .attr("transform", d => `translate(${source.x0},${source.y0})`)
        .style('opacity', 0);

    // Ajout du rectangle avec dégradé
    nodeEnter.append('rect')
        .attr('class', 'node-rect')
        .attr('width', 200)
        .attr('height', 90)
        .attr('x', -100)
        .attr('y', -45)
        .attr('rx', 10)
        .attr('ry', 10)
        .style('fill', d => getNodeColor(d.data.type, d.data.subtitle, d.data.title).bg)
        .style('stroke', d => getNodeColor(d.data.type, d.data.subtitle, d.data.title).border)
        .style('stroke-width', '3px')
        .style('filter', 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))')
        .style('cursor', 'pointer');

    // Ajout du titre principal (nom du pôle)
    nodeEnter.append('text')
        .attr('class', 'node-name')
        .attr('dy', '-10')
        .attr('text-anchor', 'middle')
        .style('fill', d => getNodeColor(d.data.type, d.data.subtitle, d.data.title).text)
        .style('font-size', '16px')
        .style('font-weight', '700')
        .style('pointer-events', 'none')
        .text(d => d.data.name);

    // Ajout du nom du responsable
    nodeEnter.append('text')
        .attr('class', 'node-responsible')
        .attr('dy', '15')
        .attr('text-anchor', 'middle')
        .style('fill', d => getNodeColor(d.data.type, d.data.subtitle, d.data.title).text)
        .style('font-size', '11px')
        .style('font-weight', '500')
        .style('opacity', '0.9')
        .style('pointer-events', 'none')
        .text(d => d.data.responsible || '');

    // Badge "Nouveau" pour les nouveaux pôles
    const newBadge = nodeEnter.filter(d => d.data.isNew)
        .append('g')
        .attr('class', 'new-badge')
        .attr('transform', 'translate(70, -35)');

    newBadge.append('rect')
        .attr('width', 55)
        .attr('height', 20)
        .attr('x', -27.5)
        .attr('y', -10)
        .attr('rx', 10)
        .attr('ry', 10)
        .style('fill', '#ff9500')
        .style('stroke', '#fff')
        .style('stroke-width', '2px');

    newBadge.append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', '4')
        .style('fill', '#fff')
        .style('font-size', '10px')
        .style('font-weight', 'bold')
        .style('pointer-events', 'none')
        .text('NOUVEAU');

    // Transition pour les nœuds
    const nodeUpdate = nodeEnter.merge(node);

    nodeUpdate.transition()
        .duration(duration)
        .attr("transform", d => `translate(${d.x},${d.y})`)
        .style('opacity', 1);

    nodeUpdate.select('rect.node-rect')
        .style('fill', d => getNodeColor(d.data.type, d.data.subtitle, d.data.title).bg);

    // Effets hover et click
    nodeUpdate.select('rect')
        .on('mouseover', function(event, d) {
            d3.select(this)
                .transition()
                .duration(200)
                .style('filter', 'drop-shadow(0 8px 16px rgba(0,0,0,0.3))')
                .style('transform', 'scale(1.05)');
        })
        .on('mouseout', function(event, d) {
            d3.select(this)
                .transition()
                .duration(200)
                .style('filter', 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))')
                .style('transform', 'scale(1)');
        })
        .on('click', function(event, d) {
            event.stopPropagation();
            openPanel(d.data.name);
        });

    // Sortie des anciens nœuds
    const nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", d => `translate(${source.x},${source.y})`)
        .style('opacity', 0)
        .remove();

    // Mise à jour des liens
    const link = g.selectAll('path.link')
        .data(links, d => d.id);

    // Entrée des nouveaux liens
    const linkEnter = link.enter().insert('path', "g")
        .attr("class", "link")
        .attr('d', d => {
            const o = {x: source.x0, y: source.y0};
            return diagonal(o, o);
        })
        .style('fill', 'none')
        .style('stroke', '#bdc3c7')
        .style('stroke-width', '3px')
        .style('opacity', 0);

    // Transition pour les liens
    const linkUpdate = linkEnter.merge(link);

    linkUpdate.transition()
        .duration(duration)
        .attr('d', d => diagonal(d, d.parent))
        .style('opacity', d => {
            // Masquer les liens entre le nœud invisible et les membres du CA
            if (d.parent && d.parent.data.type === 'invisible' && d.data.type === 'ca-member') {
                return 0;
            }
            return 0.6;
        });

    // Sortie des anciens liens
    link.exit().transition()
        .duration(duration)
        .attr('d', d => {
            const o = {x: source.x, y: source.y};
            return diagonal(o, o);
        })
        .style('opacity', 0)
        .remove();

    // Dessiner le rectangle englobant "Conseil" autour du Directeur et tous les pôles
    const conseilNodes = nodes.filter(d => d.data.type === 'pole' || d.data.type === 'directeur');

    if (conseilNodes.length > 0) {
        const topPadding = 70;
        const minX = Math.min(...conseilNodes.map(d => d.x)) - 130;
        const maxX = Math.max(...conseilNodes.map(d => d.x)) + 130;
        const minY = Math.min(...conseilNodes.map(d => d.y)) - topPadding;
        const maxY = Math.max(...conseilNodes.map(d => d.y)) + 70;

        const boxWidth = maxX - minX;
        const boxHeight = maxY - minY;

        // Supprimer l'ancien rectangle s'il existe
        g.selectAll('.conseil-box').remove();

        // Créer le groupe pour le rectangle englobant (insérer avant les nœuds)
        const conseilBox = g.insert('g', ':first-child')
            .attr('class', 'conseil-box');

        // Dessiner un rectangle de fond avec bordure rouge
        conseilBox.append('rect')
            .attr('x', minX)
            .attr('y', minY)
            .attr('width', boxWidth)
            .attr('height', boxHeight)
            .attr('rx', 15)
            .attr('ry', 15)
            .style('fill', 'rgba(196, 30, 58, 0.05)')
            .style('stroke', '#c41e3a')
            .style('stroke-width', '3px')
            .style('opacity', 0)
            .transition()
            .duration(duration)
            .style('opacity', 1);

        // Ajouter le label "Conseil" à droite
        const labelY = minY + 30;
        const labelX = maxX - 180; // Positionner à droite avec un padding

        conseilBox.append('text')
            .attr('x', labelX)
            .attr('y', labelY)
            .attr('text-anchor', 'start')
            .style('fill', '#c41e3a')
            .style('font-size', '20px')
            .style('font-weight', '700')
            .style('opacity', 0)
            .text("Conseil")
            .transition()
            .duration(duration)
            .style('opacity', 1);

        // Sous-titre
        conseilBox.append('text')
            .attr('x', labelX)
            .attr('y', labelY + 18)
            .attr('text-anchor', 'start')
            .style('fill', '#c41e3a')
            .style('font-size', '12px')
            .style('font-weight', '500')
            .style('opacity', 0)
            .text("Responsables de pôles bénévoles")
            .transition()
            .duration(duration)
            .style('opacity', 0.8);
    }

    // Dessiner le rectangle englobant "Conseil d'Administration" autour des membres CA
    const caMembers = nodes.filter(d => d.data.type === 'ca-member');

    if (caMembers.length > 0) {
        const topPadding = 90;
        const minX = Math.min(...caMembers.map(d => d.x)) - 130;
        const maxX = Math.max(...caMembers.map(d => d.x)) + 130;
        const minY = Math.min(...caMembers.map(d => d.y)) - topPadding;
        const maxY = Math.max(...caMembers.map(d => d.y)) + 70;

        const boxWidth = maxX - minX;
        const boxHeight = maxY - minY;
        const centerX = (minX + maxX) / 2;

        // Supprimer l'ancien rectangle s'il existe
        g.selectAll('.ca-box').remove();

        // Créer le groupe pour le rectangle englobant (insérer avant les nœuds)
        const caBox = g.insert('g', ':first-child')
            .attr('class', 'ca-box');

        // Dessiner un rectangle de fond avec bordure verte
        caBox.append('rect')
            .attr('x', minX)
            .attr('y', minY)
            .attr('width', boxWidth)
            .attr('height', boxHeight)
            .attr('rx', 15)
            .attr('ry', 15)
            .style('fill', 'rgba(26, 71, 42, 0.05)')
            .style('stroke', '#1a472a')
            .style('stroke-width', '3px')
            .style('opacity', 0)
            .transition()
            .duration(duration)
            .style('opacity', 1);

        // Ajouter le label "Conseil d'Administration" à l'intérieur en haut, centré
        const labelY = minY + 35;

        caBox.append('text')
            .attr('x', centerX)
            .attr('y', labelY)
            .attr('text-anchor', 'middle')
            .style('fill', '#1a472a')
            .style('font-size', '22px')
            .style('font-weight', '700')
            .style('opacity', 0)
            .text("Conseil d'Administration")
            .transition()
            .duration(duration)
            .style('opacity', 1);
    }

    // Sauvegarde des anciennes positions
    nodes.forEach(d => {
        d.x0 = d.x;
        d.y0 = d.y;
    });
}

// Fonction pour créer le chemin avec lignes droites (orthogonal)
function diagonal(s, d) {
    // Lignes droites orthogonales (verticale puis horizontale)
    const path = `M ${s.x} ${s.y}
                  V ${(s.y + d.y) / 2}
                  H ${d.x}
                  V ${d.y}`;
    return path;
}

// Initialisation
update(root);

// Centrage initial sur le nœud racine (Conseil)
const initialScale = 1;
const initialTransform = d3.zoomIdentity
    .translate(containerWidth / 2, margin.top)
    .scale(initialScale);

svg.transition()
    .duration(750)
    .call(zoomBehavior.transform, initialTransform);

// Boutons de contrôle du zoom
d3.select("#zoom-in").on("click", () => {
    svg.transition().call(zoomBehavior.scaleBy, 1.3);
});

d3.select("#zoom-out").on("click", () => {
    svg.transition().call(zoomBehavior.scaleBy, 0.7);
});

d3.select("#zoom-reset").on("click", () => {
    svg.transition().call(zoomBehavior.transform, d3.zoomIdentity);
});

// Fonction pour ouvrir le panel
function openPanel(poleName) {
    const perimeter = polePerimeters[poleName];
    const panel = document.getElementById('side-panel');
    const overlay = document.getElementById('panel-overlay');
    const title = document.getElementById('panel-title');
    const content = document.getElementById('panel-content');

    // Set title
    title.textContent = poleName;

    // Build content HTML
    let html = '';

    // Responsible person
    if (perimeter.responsible) {
        html += `
            <div class="panel-section">
                <h3><i class="fas fa-user-tie"></i> Responsable</h3>
                <div class="responsible-badge">
                    <i class="fas fa-user"></i>
                    ${perimeter.responsible}
                </div>
            </div>
        `;
    }

    // Fiche de poste link
    if (perimeter.fichPoste) {
        html += `
            <div class="panel-section">
                <h3><i class="fas fa-file-alt"></i> Fiche de poste</h3>
                <a href="${perimeter.fichPoste}" target="_blank" class="fiche-poste-link">
                    <i class="fas fa-external-link-alt"></i> Consulter la fiche de poste
                </a>
            </div>
        `;
    }

    // Tasks
    if (perimeter.tasks && perimeter.tasks.length > 0) {
        html += `
            <div class="panel-section">
                <h3><i class="fas fa-tasks"></i> Périmètre d'action</h3>
                <ul>
                    ${perimeter.tasks.map(task => `<li>${task}</li>`).join('')}
                </ul>
            </div>
        `;
    } else {
        html += `
            <div class="empty-state">
                <i class="fas fa-inbox"></i>
                <p>Aucune tâche définie pour ce pôle</p>
            </div>
        `;
    }

    // Processes
    if (perimeter.processes && perimeter.processes.length > 0) {
        html += `
            <div class="panel-section">
                <h3><i class="fas fa-cogs"></i> Process</h3>
                <ul>
                    ${perimeter.processes.map(process => `
                        <li>
                            ${process}
                            <span class="todo-badge">A faire</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }

    content.innerHTML = html;

    // Open panel
    panel.classList.add('open');
    overlay.classList.add('active');
}

// Fonction pour fermer le panel
function closePanel() {
    document.getElementById('side-panel').classList.remove('open');
    document.getElementById('panel-overlay').classList.remove('active');
}

// Close panel handlers
document.getElementById('close-panel').addEventListener('click', closePanel);
document.getElementById('panel-overlay').addEventListener('click', closePanel);
