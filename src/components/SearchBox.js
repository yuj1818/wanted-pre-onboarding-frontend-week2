import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { MdCancel } from "react-icons/md"
import SearchResult from "./SearchResult";
import { getSearchResult } from "../api/api";
import useDebounce from "../hooks/useDebounce";

const SearchBox = () => {

    const [searchWord, setSearchWord] = useState('');
    const [hasWord, setHasWord] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [recommendList, setRecommendList] = useState([]);
    const [searchCache, setSearchCache] = useState({});
    const debouncedSearchWord = useDebounce(searchWord, 500);

    const onChangeSearchWord = e => {
        setSearchWord(e.target.value);
        setHasWord(true);
    };

    const onClickCancel = e => {
        e.preventDefault();
        setSearchWord('');
    };

    const preventBlur = e => {
        e.preventDefault();
    };

    useEffect(() => {
        if (searchWord === '') {
            setHasWord(false);
        } 
        if (debouncedSearchWord !== '') {
            if (searchCache[debouncedSearchWord]) {
                setRecommendList(searchCache[debouncedSearchWord]);
            } else {
                getSearchResult(debouncedSearchWord).then(response => {
                    setRecommendList(response);
                    setSearchCache(prevSearchCache => ({
                        ...prevSearchCache,
                        [debouncedSearchWord]: response,
                    }));
                });
            }
        }
    }, [searchWord, debouncedSearchWord]);

    return  (
        <>
            <S.WordContainer>
                <S.WordInput 
                    placeholder="질환명을 입력해주세요."
                    value={searchWord}
                    onChange={onChangeSearchWord}
                    onFocus={() => {
                        setIsFocused(true);
                    }}
                    onBlur={() => {
                        setIsFocused(false);
                    }}
                />
                {isFocused && 
                    <MdCancel 
                        size="22" 
                        color="#A8AFB6" 
                        onClick={onClickCancel}
                        onMouseDown={preventBlur}
                    />
                }
                <S.SearchButton>
                    <SearchIcon />
                </S.SearchButton>
            </S.WordContainer>
            {
                isFocused &&
                <S.ResultContainer>
                    <SearchResult 
                        hasWord={hasWord} 
                        searchWord={searchWord} 
                        recommendList={recommendList}
                        searchCache={searchCache}
                    />
                </S.ResultContainer>
            }
        </>
    );
}

const S = {
    WordContainer: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: 42px;
        border: 0;
        border-color: #c2c8ce;
        background-color: #FFFFFF;        
        width: 100%;
        padding: 12px 20px;
        box-shadow: 0px 2px 4px rgba(30, 32, 37, 0.1);
    `,
    WordInput: styled.input`
        width: 100%;
        flex: 1;
        font-size: 1rem;
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
        margin-left: 0.5rem;
        cursor: pointer;
    `,
}

export default SearchBox;