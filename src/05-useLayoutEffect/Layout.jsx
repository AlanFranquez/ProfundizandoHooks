
import { Quote, LoadingQuote } from '../03-examples';
import {useCounter, useFetch} from '../hooks'


export const Layout = () => {


    const {counter, incrementar, decrementar } = useCounter(1);

    const {state} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const {isLoading, data, hasError} = state

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
