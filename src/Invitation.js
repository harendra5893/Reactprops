import React from 'react'

const Invitation = ({data}) => {
  return (
    <>
    
  Subject : <span className='redText'>{data.Subject}</span> <br/>
  To : <span className='redText'>{data.Email}</span> <br/>
  <br/>
  Hi , <span className='redText'>{data.Name}</span> <br/>
  <br/>
  I am having a <span className='redText'>{data.Text1}</span> next Friday at my Home . Would you like to come ? It will be fun . Lots of people from my school are<br/> coming . you know some of them - <span className='redText'>{data.Names}</span> .<br/>
  <br/>
  My house is behind our school , near <span className='redText'>{data.Place}</span> .<br/>
  <br/>
  I hope you will come and see you soon .<br/>
  <br/>
  from ,<br/>
  <span className='redText'>{data.From}</span>

    </>
  )
}

export default Invitation