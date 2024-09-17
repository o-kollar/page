let data = Alpine.reactive({
    lang: 'en',
    en: {
        greeting: 'HI!',
        me: 'I am Ondrej, a tech enthusiast living in Bratislava',
        roles: [
            { date: '05. 2016 - 06. 2019', title: 'Cook', description: 'Prepare meals.', company: 'Bistro Soho' },
            { date: '06. 2019 - 03. 2019', title: 'Technical Support Representative', description: 'Provides remote technical assistance to clients and IBM technical personnel on multiple products in high-volume, high-availability environments. Receives and records incident-related information and uses a variety of tools, techniques, and procedures to select appropriate actions to resolve problems.', company: 'IBM International Services Centre s.r.o.' },
            { date: '03. 2020 - 01. 2022', title: 'Technical Specialist (Generalist)', description: 'Supports solution construction, implementation, and systems integration, delivering solutions to clients in response to varying business requirements. Tasks performed require integrating software, storage, and network solutions, identifying project requirements, and developing solution delivery.', company: 'IBM International Services Centre s.r.o.' },
            { date: '01. 2022 - 06. 2024', title: 'Business Analyst', description: 'Analyzes and describes business processes and translates them into functional and non-functional IT requirements.', company: 'IBM International Services Centre s.r.o.' },
            { date: '09. 2022 - 06. 2024', title: 'Iteration Manager', description: 'Responsible for facilitating Agile processes such as sprint planning, daily stand-ups, sprint reviews, and retrospectives. Ensures team productivity by identifying blockers, managing timelines, and fostering communication between development teams and stakeholders. Also assists in aligning the team to business priorities and ensuring project deliverables meet expectations.', company: 'IBM International Services Centre s.r.o.' }
        ],
        xp: 'Experience',
        lang: 'Language',
        projects: 'Personal Projects',
        description: 'Some of the things I have recently built in my free time',
        goToGithub: 'These are just some demo pages. If you are interested, check out my GitHub.',
        slides: [
            {
                title: 'tinyMNIST',
                content: 'JavaScript-based convolutional neural network trains on the MNIST dataset to recognize handwritten digits.',
                link: 'https://o-kollar.github.io/tinyMNIST/'
            },
            {
                title: 'Pong',
                content: 'Paddles learning to play against each other using Deep Q-learning.',
                link: 'https://o-kollar.github.io/pong/'
            }
        ],
        demo: 'View Demo',
        btt: 'Back to Top'
    },
    sk: {
        greeting: 'Ahoj!',
        me: 'Som Ondrej, technologický nadšenec žijúci v Bratislave',
        roles: [
            { date: '05. 2016 - 06. 2019', title: 'Kuchár', description: 'Príprava pokrmov.', company: 'Bistro Soho' },
            { date: '06. 2019 - 03. 2019', title: 'Technická podpora', description: 'Táto rola poskytuje vzdialenú technickú pomoc klientom a technickému personálu IBM na viacerých produktoch v prostredí s vysokým objemom a vysokou dostupnosťou. Prijímajú a zaznamenávajú informácie týkajúce sa incidentov a pomocou rôznych nástrojov, techník a postupov vyberajú vhodné kroky na riešenie problémov.', company: 'IBM International Services Centre s.r.o.' },
            { date: '03. 2020 - 01. 2022', title: 'Technický špecialista (všeobecný)', description: 'Podpora konštrukcie riešení, implementácie a integrácie systémov, poskytovanie riešení klientom v reakcii na rôzne obchodné požiadavky. Vykonávané úlohy vyžadujú integráciu softvérových, úložných a sieťových riešení, identifikáciu požiadaviek projektu a vývoj riešení na dodanie.', company: 'IBM International Services Centre s.r.o.' },
            { date: '01. 2022 - 06. 2024', title: 'Business analytik', description: 'Analýza a popis obchodných procesov a ich preklad do funkčných a nefunkčných IT požiadaviek.', company: 'IBM International Services Centre s.r.o.' },
            { date: '09. 2022 - 06. 2024', title: 'Iteračný manažér', description: 'Zodpovedný za uľahčovanie procesov Agile, ako je plánovanie sprintov, denné stand-upy, sprintové hodnotenia a retrospektívy. Zaisťuje produktivitu tímu tým, že identifikuje prekážky, riadi časové harmonogramy a podporuje komunikáciu medzi vývojovými tímami a zainteresovanými stranami. Taktiež pomáha pri zosúladení tímu s obchodnými prioritami a zabezpečuje, aby dodávky projektov spĺňali očakávania.', company: 'IBM International Services Centre s.r.o.' }
        ],
        xp: 'Skúsenosti',
        lang: 'Jazyk',
        projects: 'Osobné projekty',
        description: 'Veci, ktoré som nedávno vytvoril vo svojom voľnom čase',
        goToGithub: 'Toto sú len ukážkové stránky. Ak máte záujem, pozrite si môj GitHub.',
        slides: [
            {
                title: 'tinyMNIST',
                content: 'Konvolučná neurónová sieť písaná v JavaScripte sa trénuje na datasete MNIST na rozpoznávanie rukou písaných číslic.',
                link: 'https://o-kollar.github.io/tinyMNIST/'
            },
            {
                title: 'Pong',
                content: 'Pádla sa učia hrať proti sebe pomocou Deep Q-learningu.',
                link: 'https://o-kollar.github.io/pong/'
            }
        ],
        demo: 'Zobraziť demo',
        btt: 'Späť na začiatok'
    }
})
