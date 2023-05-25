const { retrieveUnconnectedIntegrations } = require("./code");

// Testing the function

// the connectorTypes as fetched from the connector-types api
const connectorTypes = [
    {
        "id": "gongio",
        "name": "Gong",
        "type": "Productivity",
        "description": "Gong is a revenue intelligence platform.",
        "icon_url": "https://fivetran.com/integrations/coil_connectors/resources/gongio/resources/gongio.svg",
        "icons": [
            "https://fivetran.com/integrations/coil_connectors/resources/gongio/resources/gongio-0.svg",
            "https://fivetran.com/integrations/coil_connectors/resources/gongio/resources/gongio-0.png"
        ],
        "link_to_docs": "https://fivetran.com/docs/applications/gong",
        "link_to_erd": "https://fivetran.com/docs/applications/gong#schemainformation",
        "service_status": "general_availability"
    },
    {
        "id": "hubspot",
        "name": "HubSpot",
        "type": "Marketing",
        "description": "HubSpot is an inbound marketing and sales software that helps companies attract visitors, convert leads, and close customers.",
        "icon_url": "https://fivetran.com/integrations/hubspot/resources/hubspot.svg",
        "icons": [
            "https://fivetran.com/integrations/hubspot/resources/hubspot-logo.svg",
            "https://fivetran.com/integrations/hubspot/resources/hubspot-logo.png"
        ],
        "link_to_docs": "https://fivetran.com/docs/applications/hubspot",
        "link_to_erd": "https://fivetran.com/docs/applications/hubspot#schemainformation",
        "service_status": "general_availability"
    },
    {
        "id": "intercom",
        "name": "Intercom",
        "type": "Support",
        "description": "Intercom brings messaging products for sales, marketing & customer service to one platform, helping businesses avoid the stiff, spammy status quo and have real conversations that build real connections. Designed to feel like the messaging apps you use every day, Intercom lets you talk to consumers almost anywhere: inside your app, on your website, across social media and via email.",
        "icon_url": "https://fivetran.com/integrations/intercom/resources/intercom.svg",
        "icons": [
            "https://fivetran.com/integrations/intercom/resources/intercom-logo.svg",
            "https://fivetran.com/integrations/intercom/resources/intercom-logo.png"
        ],
        "link_to_docs": "https://fivetran.com/docs/applications/intercom",
        "link_to_erd": "https://fivetran.com/docs/applications/intercom#schemainformation",
        "service_status": "general_availability"
    },
    {
        "id": "zendesk",
        "name": "Zendesk Support",
        "type": "Support",
        "description": "Zendesk Support is a cloud-based customer support platform.",
        "icon_url": "https://fivetran.com/integrations/zendesk/resources/zendesk.svg",
        "icons": [
            "https://fivetran.com/integrations/zendesk/resources/zendesk-logo.svg",
            "https://fivetran.com/integrations/zendesk/resources/zendesk-logo.png"
        ],
        "link_to_docs": "https://fivetran.com/docs/applications/zendesk",
        "link_to_erd": "https://fivetran.com/docs/applications/zendesk#schemainformation",
        "service_status": "general_availability"
    },
    {
        "id": "insight7_discord",
        "name": "Insight7_Discord",
        "type": "Social",
        "description": "Discord is a voice, video and text communication service to talk and hang out with your friends and communities.",
        "icon_url": "https://insight7-api-local.s3.us-west-1.amazonaws.com/discord-icon.webp",
        "icons": [
            "https://insight7-api-local.s3.us-west-1.amazonaws.com/discord-icon-2.png",
            "https://insight7-api-local.s3.us-west-1.amazonaws.com/discord-icon-3.jpeg"
        ],
        "link_to_docs": "",
        "auth_link": "https://discord.com/api/oauth2/authorize?client_id=1106288918091010198&permissions=590848&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Fdiscord%2Fredirect&response_type=code&scope=identify%20guilds%20messages.read%20bot",
        "link_to_erd": "",
        "service_status": "general_availability"
    }
]

// the second argument is the user data with the integrations they have connected to (as fetched from the currentUser query)
const user = {
    "company": "62d65007ddd690b890310e7e",
    "id": "6317749eddd690b8908fc4c3",
    "googleId": "113721733599175691005",
    "email": "osagie.iyayi@insight7.io",
    "firstName": "Osagie",
    "lastName": "Iyayi",
    "connectors": [
      {
        "id": "646fdd3f15f897effce86f48",
        "createdBy": "6317749eddd690b8908fc4c3",
        "status": "success",
        "syncFrequency": 1440,
        "schema": "insight7_62d65007ddd690b890310e7e_insight7_discord",
        "connectedBy": null,
        "connectorId": "646fdd3f15f897effce86f44",
        "connectorType": "insight7_discord",
        "groupId": "fascinating_boiler",
        "createdAt": "1685052735191",
        "updatedAt": "1685052735191"
      }
    ]
  }

const result = retrieveUnconnectedIntegrations(user, connectorTypes)

console.log(result)

// returns 

// [
//     {
//       id: 'gongio',
//       name: 'Gong',
//       type: 'Productivity',
//       description: 'Gong is a revenue intelligence platform.',
//       icon_url: 'https://fivetran.com/integrations/coil_connectors/resources/gongio/resources/gongio.svg',
//       icons: [
//         'https://fivetran.com/integrations/coil_connectors/resources/gongio/resources/gongio-0.svg',
//         'https://fivetran.com/integrations/coil_connectors/resources/gongio/resources/gongio-0.png'
//       ],
//       link_to_docs: 'https://fivetran.com/docs/applications/gong',
//       link_to_erd: 'https://fivetran.com/docs/applications/gong#schemainformation',
//       service_status: 'general_availability'
//     },
//     {
//       id: 'hubspot',
//       name: 'HubSpot',
//       type: 'Marketing',
//       description: 'HubSpot is an inbound marketing and sales software that helps companies attract visitors, convert leads, and close customers.',
//       icon_url: 'https://fivetran.com/integrations/hubspot/resources/hubspot.svg',
//       icons: [
//         'https://fivetran.com/integrations/hubspot/resources/hubspot-logo.svg',
//         'https://fivetran.com/integrations/hubspot/resources/hubspot-logo.png'
//       ],
//       link_to_docs: 'https://fivetran.com/docs/applications/hubspot',
//       link_to_erd: 'https://fivetran.com/docs/applications/hubspot#schemainformation',
//       service_status: 'general_availability'
//     },
//     {
//       id: 'intercom',
//       name: 'Intercom',
//       type: 'Support',
//       description: 'Intercom brings messaging products for sales, marketing & customer service to one platform, helping businesses avoid the stiff, spammy status quo and have real conversations that build real connections. Designed to feel like the messaging apps you use every day, Intercom lets you talk to consumers almost anywhere: inside your app, on your website, across social media and via email.',
//       icon_url: 'https://fivetran.com/integrations/intercom/resources/intercom.svg',
//       icons: [
//         'https://fivetran.com/integrations/intercom/resources/intercom-logo.svg',
//         'https://fivetran.com/integrations/intercom/resources/intercom-logo.png'
//       ],
//       link_to_docs: 'https://fivetran.com/docs/applications/intercom',
//       link_to_erd: 'https://fivetran.com/docs/applications/intercom#schemainformation',
//       service_status: 'general_availability'
//     },
//     {
//       id: 'zendesk',
//       name: 'Zendesk Support',
//       type: 'Support',
//       description: 'Zendesk Support is a cloud-based customer support platform.',
//       icon_url: 'https://fivetran.com/integrations/zendesk/resources/zendesk.svg',
//       icons: [
//         'https://fivetran.com/integrations/zendesk/resources/zendesk-logo.svg',
//         'https://fivetran.com/integrations/zendesk/resources/zendesk-logo.png'
//       ],
//       link_to_docs: 'https://fivetran.com/docs/applications/zendesk',
//       link_to_erd: 'https://fivetran.com/docs/applications/zendesk#schemainformation',
//       service_status: 'general_availability'
//     }
//   ]