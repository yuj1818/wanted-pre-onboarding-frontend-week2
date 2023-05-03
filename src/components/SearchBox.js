import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { MdCancel } from "react-icons/md"
import SearchResult from "./SearchResult";

const SearchBox = () => {
    return  (
        <>
            <S.WordContainer>
                <S.WordForm>
                    <S.WordInput 
                        placeholder="질환명을 입력해주세요."
                    />
                    <MdCancel size="22" color="#A8AFB6"/>
                    <S.SearchButton>
                        <SearchIcon />
                    </S.SearchButton>
                </S.WordForm>
            </S.WordContainer>
            <S.ResultContainer>
                <SearchResult />
            </S.ResultContainer>
        </>
    );
}

const S = {
    WordContainer: styled.div`
        border-radius: 42px;
        border: 0;
        border-color: #c2c8ce;
        background-color: #FFFFFF;        
        width: 100%;
        padding: 12px 20px;
        box-shadow: 0px 2px 4px rgba(30, 32, 37, 0.1);
    `,
    WordForm: styled.form`
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 0.2rem;
    `,
    WordInput: styled.input`
        width: 100%;
        flex: 1;
        font-size: 1rem;
        font-weight: 400;
        letter-spacing: -0.018em;
        line-height: 1.6;
        font-family: inherit;
        border: none;
        outline: none;
    `,
    ResultContainer: styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 0 auto;
        max-width: 320px;
    `,
    SearchButton: styled.button`
        width: 35px;
        height: 35px;
        border-radius: 100%;
        border: 0;
        background-color: #3e8df4;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    `,
}

export default SearchBox;