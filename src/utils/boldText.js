const boldText = (name, searchWord) => {
    if (searchWord !== '' && name.includes(searchWord)) {
        const matchText = name.split(new RegExp(`(${searchWord})`, 'gi'));

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

    return name;
}

export default boldText;