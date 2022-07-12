import React from 'react'

const Head = (props) => {

  React.useEffect(() => {
    document.title = `Anime | ${props.title}`;
    document.querySelector('meta[description]').setAttribute('content', props.description);
  }, []);

  return (
   <>
   </>
  )
}

export default Head