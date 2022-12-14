import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Categories.css'

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://compurter-scien-sever-site.vercel.app/all-category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <div>
                <h2 className='mb-4'>Categories</h2>
                {
                    categories.map(ct => <li key={ct.id} className='category'><Link className='link-btn text-dark' to={`/categoryCourse/${ct.id}`}>{ct.name}</Link></li>)
                }
            </div>
        </div>
    );
};

export default Categories;