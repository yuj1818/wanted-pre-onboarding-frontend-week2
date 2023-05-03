import client from "./client";

export const getSearchResult = async (name) => {
    if (!name) {
        return;
    };
    try {
        const response = await client.get(`search-conditions/?name=${name}`);
        return response.data;
    } catch(error) {
        console.log(error);
    }
}