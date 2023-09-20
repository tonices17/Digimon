import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api/digimon/'

const EditDigimon = () => {

    const [name, setName] = useState('')
    const [xAntibody, setxAntibody] = useState('')
    const [level, setLevel] = useState('')
    const [type, setType] = useState('')
    const [attribute, setAttribute] = useState('')
    const navigate = useNavigate();
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${endpoint}${id}`, {
            id: id,
            name: name,
            xAntibody: xAntibody,
            level: level,
            type: type,
            attribute: attribute,
        })
        navigate('/')
    }

    useEffect( () =>{

        const getDigimonById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setName(response.data.name)
            setxAntibody(response.data.xAntibody)
            setLevel(response.data.level)
            setType(response.data.type)
            setAttribute(response.data.attribute)
        }
        getDigimonById()
        
    }, [])
  return (
    <div>
        <h2>Edit Digimon</h2>
        <form onSubmit={update}>
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
                    type='text'
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
                <label className='form-label'>Attribute</label>
                <input 
                    value={attribute} 
                    onChange={ (e)=> setAttribute(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <button type='submit' className='btn btn-success'>Update</button>
        </form>
    </div>
  )
}

export default EditDigimon