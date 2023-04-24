const SearchTerms = ({matchingTerms}) => {


    return ( 
        <article>
            {
                matchingTerms.map(term => {
                    return ( 
                        <article>
                            term
                        </article>
                     )
                })
            }
        </article>
     );
}
 
export default SearchTerms;