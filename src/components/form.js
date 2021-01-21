import React from 'react';


const Form = () => {
    return (
        <form>
            <input/>
            <button type='submit'>button</button>

            <div>
                <select name='todos'>
                    <option value='all'>All</option>
                    <option value='complete'>Complete</option>
                    <option value='unconplete'>Unconplete</option>
                </select>
            </div>

        </form>
    )
}

export default Form