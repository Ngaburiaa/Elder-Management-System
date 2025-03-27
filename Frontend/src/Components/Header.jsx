
import React, { useState, useEffect } from 'react';
import * as BsIcon from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

function Header({ openSidebarToggle, OpenSidebar }) {
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setNotifications([
      { id: 1, text: 'New appointment scheduled', read: false },
      { id: 2, text: 'System update available', read: true },
    ]);
  }, []);

  useEffect(() => {
    setMessages([
      { id: 1, text: 'New message from Dr. Smith', read: false },
      { id: 2, text: 'Reminder: Monthly checkup', read: true },
    ]);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/Login');
  };

  const markAsRead = (type, id) => {
    if (type === 'notification') {
      setNotifications(notifications.map(n => 
        n.id === id ? { ...n, read: true } : n
      ));
    } else if (type === 'message') {
      setMessages(messages.map(m => 
        m.id === id ? { ...m, read: true } : m
      ));
    }
  };


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.profile-menu')) setShowProfileMenu(false);
      if (!e.target.closest('.notifications')) setShowNotifications(false);
      if (!e.target.closest('.messages')) setShowMessages(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className='headerMain'>
     
      <div className='menu-icon' onClick={OpenSidebar}>
        {openSidebarToggle ? (
          <BsIcon.BsX className='icon close_icon' />  
         ) : (
           <BsIcon.BsJustify className='icon openIcon' /> 
        )} 

        </div>
      
      <div className='header-left'>
        {searchOpen ? (
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button type="submit">
              <BsIcon.BsSearch className='icon' />
            </button>
          </form>
        ) : (
          <BsIcon.BsSearch 
            className='icon' 
            onClick={() => setSearchOpen(true)}
          />
        )}
      </div>

      <div className='header-right'>
        <div className="notifications relative">
          <BsIcon.BsFillBellFill 
            className='icon'
            onClick={() => setShowNotifications(!showNotifications)}
          />
          {notifications.some(n => !n.read) && (
            <span className="badge">{notifications.filter(n => !n.read).length}</span>
          )}
          {showNotifications && (
            <div className="dropdown">
              <h3>Notifications</h3>
              {notifications.map(notification => (
                <div 
                  key={notification.id}
                  className={`notification-item ${!notification.read ? 'unread' : ''}`}
                  onClick={() => markAsRead('notification', notification.id)}
                >
                  {notification.text}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="messages relative">
          <BsIcon.BsFillEnvelopeFill 
            className='icon'
            onClick={() => setShowMessages(!showMessages)}
          />
          {messages.some(m => !m.read) && (
            <span className="badge">{messages.filter(m => !m.read).length}</span>
          )}
          {showMessages && (
            <div className="dropdown">
              <h3>Messages</h3>
              {messages.map(message => (
                <div 
                  key={message.id}
                  className={`message-item ${!message.read ? 'unread' : ''}`}
                  onClick={() => markAsRead('message', message.id)}
                >
                  {message.text}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="profile-menu relative">
          <BsIcon.BsPersonCircle 
            className='icon'
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          />
          {showProfileMenu && (
            <div className="dropdown">
              <div className="profile-item" onClick={() => navigate('/Dashboard/Profile')}>
                My Profile
              </div>
              <div className="profile-item" onClick={() => navigate('/Dashboard/settings')}>
                Settings
              </div>
              <div className="profile-item" onClick={handleLogout}>
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
