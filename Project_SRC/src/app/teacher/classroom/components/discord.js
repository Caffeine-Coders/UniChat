import React from 'react';
import Box from '@mui/material/Box';
export default function Discord() {
  return (
      <div style={{ height: '85vh', width: '100%', borderRadius: '10px', overflow: 'hidden', position: 'relative' }}>
        <iframe
          src={`https://e.widgetbot.io/channels/1204543420148752434/1204543420148752437`}
          style={{ border: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
      </div>
  );
}

