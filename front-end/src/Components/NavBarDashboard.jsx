import React from 'react';
import './NavBarDashboard.jsx';

export default function NavBar() {
  return (
    <div>
       <div class="sidebar">
    <div class="sidebar-header">
      Sidebar Navigation
    </div>
    <ul class="sidebar-menu">
      <li><a href="#"><img src="live_icon.png" alt="Live" /> Live</a></li>
      <li><a href="#"><img src="index_icon.png" alt="Index" /> Index</a></li>
    </ul>
  </div>
    </div>
  )
}
