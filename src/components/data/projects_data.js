import chatapp from '../../assets/projects_images/chatapp.JPG'
import portfolio from '../../assets/projects_images/portfolio.JPG'
import doodle from '../../assets/projects_images/doodle.png'
import COVID from '../../assets/projects_images/COVID.jpg'
import air from '../../assets/projects_images/air.png'
import bot from '../../assets/projects_images/bot.png'
import fant from '../../assets/projects_images/fant.png'
import profolio from '../../assets/projects_images/profolio.png'

const data_projects = [
    {
        name: 'Smart-Survillance System ',
        image: COVID,
        deployed_url: 'https://github.com/utkarshs-ingh/Smart-Survillance-System',
        github_url: 'https://github.com/utkarshs-ingh/Smart-Survillance-System',
        category: ['py']
    },

    {
        name: 'FandT Nature catalogue',
        image: fant,
        deployed_url: 'https://dev-talks.herokuapp.com/',
        github_url: 'https://github.com/utkarshs-ingh/fandtnature',
        category: ['mern']
    },

    {
        name: 'Realtime Chat App',
        image: chatapp,
        deployed_url: 'https://github.com/utkarshs-ingh/Chat-Application',
        github_url: 'https://github.com/utkarshs-ingh/Chat-Application',
        category: ['c']
    },

    {
        name: 'Air Canvas',
        image: air,
        github_url: 'https://github.com/utkarshs-ingh/Air-Canvas',
        category: ['py']
    },

    {
        name: 'Doodle.io',
        image: doodle,
        github_url: 'https://github.com/utkarshs-ingh/Doodle.io',
        deployed_url: 'https://mysterious-meadow-03351.herokuapp.com/',
        category: ['mern']
    },

    {
        name: 'ProFolio',
        image: profolio,
        github_url: 'https://github.com/utkarshs-ingh/ProFolio',
        deployed_url: 'https://dev-profolio.herokuapp.com/',
        category: ['mern']
    },

    {
        name: 'DOT Discord BOT',
        image: bot,
        github_url: 'https://github.com/utkarshs-ingh/DOT-BOT',
        deployed_url: 'https://github.com/utkarshs-ingh/DOT-BOT',
        category: ['py']
    },

    {
        name: 'crio-profile',
        image: portfolio,
        github_url: 'https://github.com/utkarshs-ingh/crio-profile',
        category: ['mern']
    }
]

export default data_projects;