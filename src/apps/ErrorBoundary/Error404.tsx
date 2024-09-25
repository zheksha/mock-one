import React from 'react'
import { Link } from 'react-router-dom' // Assuming you're using React Router for navigation

function Error404() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-primary">404</h1>
        <p className="lead">Oops! The page you're looking for doesn't exist.</p>
        <p className="text-muted mb-4">
          It looks like you took a wrong turn. Don't worry, it happens to the
          best of us.
        </p>
        <Link to="/" className="btn btn-primary btn-lg">
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

export default Error404
