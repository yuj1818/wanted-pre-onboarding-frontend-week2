const boldText = (word, value) => {
    const name = word.toLowerCase();
    const searchWord = value.toLowerCase();
    if (searchWord !== '' && name.includes(searchWord)) {
        const matchText = word.split(new RegExp(`(${searchWord})`, 'gi'));

        return (
            <>
                {matchText.map((text, idx) => 
                    text.toLowerCase() === searchWord.toLowerCase() ?
                    (
                        <span key={idx} style={{ fontWeight: 700 }}>
                            {text}
                        </span>
                    ) : (
                        text
                    )
                )}
            </>
        );
    }

    return word;
}

export default boldText;