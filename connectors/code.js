/**
 * The function retrieves unconnected integrations for a given user and list of connector types.
 * @param user - The user object contains information about a user, including their connected
 * connectors.
 * @param connectorTypes - an array of objects representing the types of connectors that a user can
 * have. Each object has an "id" property that represents the unique identifier for that connector
 * type.
 * @returns an array of connector types that the user is not currently connected to.
 */
function retrieveUnconnectedIntegrations(userConnectors, connectorTypes) {
  const unconnectedConnectors = [];
  const updatedConnectorTypes = connectorTypes.map((c) => {
    c.id.substring(0, 9).toLowerCase() === "insight7_"
      ? (c.id = c.id.substring(9))
      : (c.id = c.id);
    return c;
  });

  for (const connectorType of updatedConnectorTypes) {
    const connector = userConnectors.find(
      (c) => c.connectorType.toLowerCase() === connectorType.id
    );
    if (!connector) {
      unconnectedConnectors.push(connectorType);
    }
  }
  return unconnectedConnectors;
}

module.exports = {
  retrieveUnconnectedIntegrations,
};
