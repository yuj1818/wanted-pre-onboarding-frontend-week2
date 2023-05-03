import client from "./client";

export const getSearchResult = async (word) => {
    if (!word) {
        return;
    };

    try {
        await client.get(`https://api.clinicaltrialskorea.com/api/v1/search-conditions/?name=${word}`);
    } catch(error) {
        console.log(error);
    }
}