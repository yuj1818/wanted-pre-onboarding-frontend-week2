import styled from "styled-components";
import SearchBox from "./SearchBox";

const SearchTemplate = () => {
    return (
        <S.Container>
            <S.Wrap>
                <S.Title>
                    국내 모든 임상시험 검색하고
                    <br/>
                    온라인으로 참여하기
                </S.Title>
                <S.SearchBox>
                    <SearchBox />
                </S.SearchBox>
            </S.Wrap>
        </S.Container>
    );
}

const S = {
    Container: styled.div`
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #CAE9FF;
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    Wrap: styled.div`
        position: relative;
        width: 100%;
        max-width: 360px;
        display: flex;
        flex-direction: column;
        margin-left: auto;
        margin-right: auto;
        padding: 120px 0 290px;
    `,
    Title: styled.h2`
        font-size: 1.25rem;
        font-weight: 700;
        letter-spacing: -0.018em;
        line-height: 1.6;
        margin: 0;
        margin-bottom: 20px;
        font-family: inherit;
        text-align: center;
    `,
    SearchBox: styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 0;
        max-width: 320px;
        gap: 0.5rem;
    `
}

export default SearchTemplate;