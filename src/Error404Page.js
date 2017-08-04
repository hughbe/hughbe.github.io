import React from 'react';
import { Link } from 'react-router-dom';
import './css/Error404Page.css'

const Error404Page = () => (
  <main>
    <section className="error-404">
    <h1 className="sad-face">: (</h1>
    <h1>No Such Page</h1>
    <Link to="/">Home</Link>
    </section>
  </main>
);
export default Error404Page;