import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api'
const ShowDigimon = () => {

    const [digimons, setDigimons] = useState([])
    useEffect ( ()=> {
        getAllDigimons()
    }, [])

    const getAllDigimons = async () => {
        const response = await axios.get(`${endpoint}/digimons`)
        console.log (response.data)
        setDigimons(response.data)
    }

    const deleteDigimon = async (id) => {

       await axios.delete(`${endpoint}/digimon/${id}`)
       getAllDigimons()
         
    }
  return (
    <div>
        <div className='d-grid gap-2'>
            <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
        </div>
        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Name</th>
                    <th>xAntibody</th>
                    <th>Level</th>
                    <th>Type</th>
                    <th>Attributes</th>
                </tr>
            </thead>
            <tbody>
                { digimons.map( (digimon) => (
                    <tr key={digimon.id}>
                        <td>{digimon.name}</td>
                        <td>{digimon.xAntibody}</td>
                        <td>{digimon.level}</td>
                        <td>{digimon.type}</td>
                        <td>{digimon.attribute}</td>
                        <td>
                            <Link to={`/edit/${digimon.id}`} className='btn btn-info'>Edit</Link>
                            <button onClick={ ()=>deleteDigimon(digimon.id)} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                ))}                
            </tbody>
        </table>
    </div>
  )
}

export default ShowDigimon