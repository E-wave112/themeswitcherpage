// filtering insights/reports by the owner of the data (for Tunde and Sofiyat)

/**
 * It filters out null values, then filters out objects that don't have a createdBy property, then
 * filters out objects that don't have a createdBy.id property that matches the id passed in
 * @param arr - the array of objects to filter; this could be the insights or reports array
 * @param id - the id of the user
 * @returns An array of objects that have been filtered by the id of the user.
 */
 const filterByOwner = (arr, id) => {
    try {
        const firstFilter = arr.filter((f) => f !== null)
        const dataArr = firstFilter.filter((f) =>  f.createdBy !== null)
        // final filter
        const finalFilter = dataArr.filter((f) => f.createdBy.id === id)
        return finalFilter  
    } catch (error) {
        throw error;
    }
}

// filtering insights/reports by other members of the orgs (for Tunde and Sofiyat)

/**
 * It filters out all the null values, then filters out all the objects that have a null value for the
 * createdBy key, then filters out all the objects that have a createdBy key that matches the id passed
 * in
 * @param arr - the array of objects to filter; this could be the insights or reports array
 * @param id - the id of the user
 * @returns An array of objects that have not been filtered by the id of the user.
 */
 const filterByTeamMembers = (arr, id) => {
    try {
        const firstFilter = arr.filter((f) => f !== null)
        const dataArr = firstFilter.filter((f) =>  f.createdBy !== null)
        // final filter
        const finalFilter = dataArr.filter((f) => f.createdBy.id !== id)
        return finalFilter 
    } catch (error) {
        throw error;
    }
}

// filtering insights by type (only for Tunde)

/**
 * It takes an array of insight objects and a string as arguments, filters out any null values, and then
 * filters out any insight objects that don't have a type property that matches the string
 * @param arr - an array of insight objects to filter
 * @param type - the type of insight you want to filter by
 * @returns An array of insight objects that have a type of "insight"
 */
 const filterInsightbyType = (arr, type) => {
    try {
        const firstFilter = arr.filter((f) => f !== null)
        const finalFilter = firstFilter.filter((f) => f.type === type)
        return finalFilter 
    } catch (error) {
        throw error;
    }
}