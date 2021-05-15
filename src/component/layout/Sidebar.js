import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/Style.css'
export default function Sidebar() {
  return (
    <div>
      <div className="sidenav">
        <Link to="/DachBoard">DachBoard</Link>
        <Link to="/">Home</Link>
        <Link to="/order">Order</Link>
        <Link to="/view">ViewDetail</Link>
        
      </div>
    </div>
  );
}
