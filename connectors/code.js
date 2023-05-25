/**
 * The function retrieves unconnected integrations for a given user and list of connector types.
 * @param user - The user object contains information about a user, including their connected
 * connectors.
 * @param connectorTypes - an array of objects representing the types of connectors that a user can
 * have. Each object has an "id" property that represents the unique identifier for that connector
 * type.
 * @returns an array of connector types that the user is not currently connected to.
 */
function retrieveUnconnectedIntegrations(user, connectorTypes){
    const unconnectedConnectors = [];
    const userConnectors = user.connectors
    for (const connectorType of connectorTypes) {
        const connector = userConnectors.find(c => c.connectorType === connectorType.id);
        if (!connector) {
            unconnectedConnectors.push(connectorType);
        }
    }
    return unconnectedConnectors;

}

module.exports = {
    retrieveUnconnectedIntegrations
};