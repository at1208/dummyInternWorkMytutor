import React from 'react';

const LiveStream = () => {
  return <div>
  <h1 className='text-center'>Live Stream</h1>
  <hr />
<div className='text-center' style={{ marginTop: '50px'}}>
  <form onSubmit={(e) => e.preventDefault()}>
         <label className='b6' style={{ width:'150px', backgroundColor: 'dodgerblue', marginRight:'10px'}}>Title</label>
         <input type='text' value='' onChange =  '' placeholder='Enter title of stream' className='text-center b7'/>
         <br />

         <label  className='b6'  style={{ width:'150px' ,backgroundColor: 'dodgerblue',marginRight:'10px'}}>Subject </label>
         <input type=''   value='' onChange = ''  placeholder='Enter subject' className='text-center b7'/>
         <br />

         <label  className='b6'  style={{ width:'150px', backgroundColor: 'dodgerblue',marginRight:'10px'}}>Thumbnail</label>
         <input type=' '   value='' onChange = '' placeholder='Enter thumbnail link'  className='text-center b7'/>
         <br />

         <label  className='b6'  style={{ width:'150px',backgroundColor: 'dodgerblue',marginRight:'10px'}}>Youtube ID </label>
         <input type=' '   value='' onChange = '' placeholder='Enter Youtube ID'  className='text-center b7'/>
         <br />


 <br />
<button className =  'b8 btn btn-sm btn-outline-info' onClick= ''>Submit</button>
</form>
</div>
  </div>
}
export default LiveStream;
