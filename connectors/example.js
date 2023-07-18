const { retrieveUnconnectedIntegrations } = require("./code");

const clientId = "113721733599175691005";
const redirectUri = "http://localhost:4000/gmail/redirect";
// Testing the function
// the connectorTypes as fetched from the connector-types api
const connectorTypes = [
  {
    id: "insight7_gmail",
    name: "Insight7_Gmail",
    type: "Social",
    description: "Gmail is an email service offered by google",
    icon_url:
      "https://insight7-api-local.s3.us-west-1.amazonaws.com/gmail-icon.webp",
    icons: [
      "https://insight7-api-local.s3.us-west-1.amazonaws.com/gmail-icon-2.png",
      "https://insight7-api-local.s3.us-west-1.amazonaws.com/gmail-icon-3.jpeg",
    ],
    link_to_docs: "",
    link_to_erd: "",
    service_status: "general_availability",
    custom: true,
    oauth_url: `https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https://www.googleapis.com/auth/gmail.readonly&response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`,
  },
  {
    id: "gongio",
    name: "Gong",
    type: "Productivity",
    description: "Gong is a revenue intelligence platform.",
    icon_url:
      "https://fivetran.com/integrations/coil_connectors/resources/gongio/resources/gongio.svg",
    icons: [
      "https://fivetran.com/integrations/coil_connectors/resources/gongio/resources/gongio-0.svg",
      "https://fivetran.com/integrations/coil_connectors/resources/gongio/resources/gongio-0.png",
    ],
    link_to_docs: "https://fivetran.com/docs/applications/gong",
    link_to_erd:
      "https://fivetran.com/docs/applications/gong#schemainformation",
    service_status: "general_availability",
  },
  {
    id: "hubspot",
    name: "HubSpot",
    type: "Marketing",
    description:
      "HubSpot is an inbound marketing and sales software that helps companies attract visitors, convert leads, and close customers.",
    icon_url: "https://fivetran.com/integrations/hubspot/resources/hubspot.svg",
    icons: [
      "https://fivetran.com/integrations/hubspot/resources/hubspot-logo.svg",
      "https://fivetran.com/integrations/hubspot/resources/hubspot-logo.png",
    ],
    link_to_docs: "https://fivetran.com/docs/applications/hubspot",
    link_to_erd:
      "https://fivetran.com/docs/applications/hubspot#schemainformation",
    service_status: "general_availability",
  },
  {
    id: "intercom",
    name: "Intercom",
    type: "Support",
    description:
      "Intercom brings messaging products for sales, marketing & customer service to one platform, helping businesses avoid the stiff, spammy status quo and have real conversations that build real connections. Designed to feel like the messaging apps you use every day, Intercom lets you talk to consumers almost anywhere: inside your app, on your website, across social media and via email.",
    icon_url:
      "https://fivetran.com/integrations/intercom/resources/intercom.svg",
    icons: [
      "https://fivetran.com/integrations/intercom/resources/intercom-logo.svg",
      "https://fivetran.com/integrations/intercom/resources/intercom-logo.png",
    ],
    link_to_docs: "https://fivetran.com/docs/applications/intercom",
    link_to_erd:
      "https://fivetran.com/docs/applications/intercom#schemainformation",
    service_status: "general_availability",
  },
  {
    id: "zendesk",
    name: "Zendesk Support",
    type: "Support",
    description: "Zendesk Support is a cloud-based customer support platform.",
    icon_url: "https://fivetran.com/integrations/zendesk/resources/zendesk.svg",
    icons: [
      "https://fivetran.com/integrations/zendesk/resources/zendesk-logo.svg",
      "https://fivetran.com/integrations/zendesk/resources/zendesk-logo.png",
    ],
    link_to_docs: "https://fivetran.com/docs/applications/zendesk",
    link_to_erd:
      "https://fivetran.com/docs/applications/zendesk#schemainformation",
    service_status: "general_availability",
  },
  {
    id: "insight7_discord",
    name: "Insight7_Discord",
    type: "Social",
    description:
      "Discord is a voice, video and text communication service to talk and hang out with your friends and communities.",
    icon_url:
      "https://insight7-api-local.s3.us-west-1.amazonaws.com/discord-icon.webp",
    icons: [
      "https://insight7-api-local.s3.us-west-1.amazonaws.com/discord-icon-2.png",
      "https://insight7-api-local.s3.us-west-1.amazonaws.com/discord-icon-3.jpeg",
    ],
    link_to_docs: "",
    auth_link:
      "https://discord.com/api/oauth2/authorize?client_id=1106288918091010198&permissions=590848&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Fdiscord%2Fredirect&response_type=code&scope=identify%20guilds%20messages.read%20bot",
    link_to_erd: "",
    service_status: "general_availability",
  },
];

// the second argument is the integrations the user have connected to (as fetched from a separate endpoint)
const userConnectors = [
  {
    _id: "64a4818c1e8db2a205b28c32",
    connectorId: "playwright_volley",
    groupId: "fascinating_boiler",
    connectorType: "GMAIL",
    createdBy: "644b20492847800f2e085c41",
    company: "62d65007ddd690b890310e7e",
    connectedBy: "rumbling_elementary",
    schema: "insight7io_62d65007ddd690b890310e7e_gmail",
    syncFrequency: 360,
    status: "success",
    oauth_tokens: {
      access_token:
        "ya29.a0AbVbY6M2B8ro9lo4waV-n9yV1RFCkcOt8txd5iWeZKR6myKymZhewtkL3V7BTTjDetsx3sfvYJCT5cQE1vxn_1_1QkWlFFQRRO3fXjUpjR0wyJfqphlnBjECUgY40xI1nqYknCMKs0Otg0qfEBHFBOQqvbZyaCgYKAX4SARISFQFWKvPlkEDLYnV9eUpGYDPs8vKJig0163",
      refresh_token:
        "1//033JoC8WgnO3hCgYIARAAGAMSNwF-L9IrASLH3KJoXu4Dk_5XTOytecu0IDZDIZsQL8deS8jpemgxnzpB_PTU3PPAFWqMUvXbv2M",
      scope: "https://www.googleapis.com/auth/gmail.readonly",
      token_type: "Bearer",
      expiry_date: 1688506261278,
    },
    createdAt: "2023-07-04T20:31:08.392Z",
    updatedAt: "2023-07-04T20:31:08.392Z",
    __v: 0,
  },
  {
    _id: "64b6d03ec43c98f5565d0250",
    connectorId: "felt_aloe",
    groupId: "desolation_recently",
    connectorType: "HUBSPOT",
    createdBy: "64a7e27490ed73034ff9c22f",
    company: "62d65007ddd690b890310e7e",
    connectedBy: "rumbling_elementary",
    schema: "insight7io_62d65007ddd690b890310e7e_hubspot",
    syncFrequency: 1440,
    status: "success",
    oauth_tokens: {
      token_type: "bearer",
      refresh_token: "d133a1b3-4a64-43ee-81f4-b861ef967033",
      access_token:
        "COG849GWMRIUAAEBUAAAQCAAAABYAAEAAAAAAAQYi63-EiDRioEZKKPkcTIU5MjRWEBENv1wSkpgLx-Rop3AzPw6PQAAAEEAAAAAwAcAAAAAAAAAhgAAAAAAAAAMAAAACAAQAGAwAAAAAABA_BgAABAgAwAAAAAAAAAAAAAAoAFCFEfcInzufJsbRtPBGEn5DDIqqEQaSgNuYTFSAFoA",
      expires_in: 1800,
    },
    createdAt: "2023-07-18T17:47:42.881Z",
    updatedAt: "2023-07-18T17:47:42.881Z",
    __v: 0,
  },
];

const result = retrieveUnconnectedIntegrations(userConnectors, connectorTypes);

console.log(result);

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
