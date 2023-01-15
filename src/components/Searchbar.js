import React, {useState} from 'react'

const Searchbar = ({onSubmit}) => {

    const [input, setInput] = useState('');

    const changeHandler = (e) =>{
        setInput(e.target.value)
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        console.log("input:", input)
        onSubmit(input)
    }

  return (
    <div className='searchbar__container'>
        <div className="w-full text-center sm:w-auto px-4 mb-6 sm:mb-5">
          <h4 className="text-2xl  font-bold tracking-wide text-black mb-1">Pics App</h4>
          <p className="text-sm text-gray-300">Search your pics here!</p>
        </div>
        <form onSubmit={submitHandler}>
            <input value={input} onChange={changeHandler} className="block py-4 px-3 w-full text-lg text-gray-70 font-small capitalize bg-transparent border focus:border-green rounded-lg" type="text" placeholder="Search Pics and enter..." />
        </form>
    </div>
    
  )
}

export default Searchbar