import React from 'react'

function Rating({rating,rev,color}) {
  return (
    <div className='rating'>
        <i style={{color}} className={
            rating>=1?
            'fas fa-star':rating>=.5?'fas fa-star':rating>0?'fas fa-star-half-alt':''
            }> 
        </i>
        <i style={{color}} className={
            rating>=2?
            'fas fa-star':rating>=1.5?'fas fa-star':rating>1?'fas fa-star-half-alt':''
            }> 
        </i>
        <i style={{color}} className={
            rating>=3?
            'fas fa-star':rating>=2.5?'fas fa-star':rating>2?'fas fa-star-half-alt':''
            }> 
            
        </i>
        <i style={{color}} className={
            rating>=4?
            'fas fa-star':rating>=3.5?'fas fa-star':rating>3?'fas fa-star-half-alt':''
            }> 
            
        </i>
        <i style={{color}} className={
            rating>=5?
            'fas fa-star':rating>=4.5?'fas fa-star':rating>4?'fas fa-star-half-alt':''
            }> 
            
        </i>
    </div>
  )
}

export default Rating
