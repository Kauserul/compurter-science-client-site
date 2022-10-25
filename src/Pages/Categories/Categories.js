import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Categories.css'

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/all-category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <div>
                <h2 className='mb-4'>Categories</h2>
                {
                    categories.map(ct => <li key={ct.id} className='category'><Link className='link-btn text-dark' to={`/classes/${ct.id}`}>{ct.name}</Link></li>)
                }
            </div>
        </div>
    );
};

export default Categories;