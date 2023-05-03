import styled from "styled-components";

const SearchResult = () => {
    
    const hasWord = true;
    const recentSearch = {};

    return (
        <S.ResultContainer>
            { hasWord ?
                <S.ResultBox>
                    검색어
                    <S.Subtitle>
                        추천 검색어
                    </S.Subtitle>
                    <S.ResultList>
                    </S.ResultList>
                </S.ResultBox>
                :
                <S.RecentSearchBox>
                    <S.Subtitle>
                        최근 검색어
                    </S.Subtitle>
                    {recentSearch === {} ?
                        <S.RecentSearchList>

                        </S.RecentSearchList>
                        :
                        <div>최근 검색어가 없습니다</div>
                    }
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
    `,
    RecentSearchBox: styled.div`
        display: flex;
        flex-direction: column;
    `,
    RecentSearchList: styled.div`
        display: flex;
        flex-direction: column;
    `,
    Subtitle: styled.h3`
        font-size: 0.8rem;
        font-weight: 400;
        letter-spacing: -0.018em;
        line-height: 1.6;
        font-family: inherit;
        margin: 0.5rem 0;
    `
}

export default SearchResult;