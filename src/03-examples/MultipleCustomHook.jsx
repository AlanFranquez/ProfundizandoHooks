
import { Quote, LoadingQuote } from './';
import {useCounter, useFetch} from '../hooks'


export const MultipleCustomHook = () => {


    const {counter, incrementar, decrementar } = useCounter(1);

    const {isLoading, data, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)


   const {author, quote} = !!data && data[0];

   

  return (
    <>
        <h1>Breaking Bad Quotes</h1>

        <hr></hr>

        {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote}/>
        
            
        }


        {counter > 1 ? <button className="btn btn-secondary" onClick={() => {decrementar(1)}}>&#8592;</button> : null}

        <button disabled={isLoading} onClick={()=> incrementar(1)} className="btn btn-primary">
            Next quote
        </button>

        

        
        

    </>
  )
}
