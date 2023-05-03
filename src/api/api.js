import client from "./client";

export const getSearchResult = async (name) => {
    if (!name) {
        return;
    };
    try {
        const response = await client.get(`search-conditions/?name=${name}`);
            if (response.data.length < 7) {
                return response.data;
            } else {
                return response.data.slice(0,7)
            }
    } catch(error) {
        console.log(error);
    }
}