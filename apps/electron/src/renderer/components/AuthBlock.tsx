return (
  <div>
    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    <div style={{ marginLeft: '20px' }}>Value: {value}</div>
  </div>
);