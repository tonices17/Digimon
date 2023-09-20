import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api/digimon/'
const CreateDigimon = () => {

    const [name, setName] = useState('')
    const [xAntibody, setxAntibody] = useState('')
    const [level, setLevel] = useState('')
    const [type, setType] = useState('')
    const [attribute, setAttribute] = useState('')
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, {name: name, xAntibody: xAntibody, level: level, type: type, attribute: attribute})
        navigate('/')

    }
  return (
    <div>
        <h2>Create a new Digimon</h2>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Name</label>
                <input 
                    value={name} 
                    onChange={ (e)=> setName(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>xAntibody</label>
                <input 
                    value={xAntibody} 
                    onChange={ (e)=> setxAntibody(e.target.value)}
                    type='boolean'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Level</label>
                <input 
                    value={level} 
                    onChange={ (e)=> setLevel(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Type</label>
                <input 
                    value={type} 
                    onChange={ (e)=> setType(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Attributes</label>
                <input 
                    value={attribute} 
                    onChange={ (e)=> setAttribute(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <button type='submit' className='btn btn-success'>Save</button>
        </form>
    </div>
  )
}

export default CreateDigimon