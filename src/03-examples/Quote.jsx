

export const Quote = ({author, quote}) => {
  return (
    
        <blockquote className="blockquote text-right">
            <p className="mb-1">{quote}</p>
            <footer className="blockquote-footer mt-1">{author}</footer>
        </blockquote>

  )
}
