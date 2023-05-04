import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import boldText from "../utils/boldText";

const SearchResult = ({hasWord, searchWord, recommendList, searchCache}) => {
    
    const recentSearch = Object.keys(searchCache).slice(-7).reverse();

    return (
        
        <S.ResultContainer>
            { hasWord ?
                <S.ResultBox>
                    <S.SearchWord>
                        <SearchIcon />
                        {searchWord}
                    </S.SearchWord>
                    <S.Subtitle>
                        추천 검색어
                    </S.Subtitle>
                    <S.ResultList>
                        {recommendList && recommendList.length !== 0 ?
                            recommendList.map((item, idx) => (
                                <S.ResultItem key={idx}>
                                    <SearchIcon />
                                    <div>{boldText(item.name, searchWord)}</div>
                                </S.ResultItem>
                            ))
                            :
                            <div>검색어 없음</div>
                        }
                    </S.ResultList>
                </S.ResultBox>
                :
                <S.RecentSearchBox>
                    <S.Subtitle>
                        최근 검색어
                    </S.Subtitle>
                    <S.RecentSearchList>
                        {recentSearch && recentSearch.length !== 0 ?
                            recentSearch.map((word, idx) => (
                                <S.RecentSearchItem 
                                    key={idx}
                                >
                                    <SearchIcon />
                                    {word}
                                </S.RecentSearchItem>
                            ))
                            :
                            <div>최근 검색어가 없습니다</div>
                        }
                    </S.RecentSearchList>
                </S.RecentSearchBox>
            }
        </S.ResultContainer>
    );
}

const S = {
    ResultContainer: styled.div`
        border-radius: 10px;
        border: 0;
        border-color: #c2c8ce;
        background-color: #FFFFFF;
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 12px 20px;
        box-shadow: 0px 2px 4px rgba(30, 32, 37, 0.1);
    `,
    ResultBox: styled.div`
        display: flex;
        flex-direction: column;
    `,
    ResultList: styled.div`
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 1rem;
    `,
    ResultItem: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
    `,
    RecentSearchBox: styled.div`
        display: flex;
        flex-direction: column;
    `,
    RecentSearchList: styled.div`
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
    `,
    Subtitle: styled.h3`
        color: #A8AFB6;
        font-size: 0.8rem;
        font-weight: 700;
        letter-spacing: -0.018em;
        line-height: 1.6;
        font-family: inherit;
        margin: 0.5rem 0;
    `,
    SearchWord: styled.div`
        margin-top: 1rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
        font-weight:700;
    `,
    RecentSearchItem: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
        &:hover {
            background-color: #0f0f0f;
            opacity: 0.1;
        }
    `
}

export default SearchResult;