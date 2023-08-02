import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 

export default function ToolTip() {
  return (
    <>
    <div style={{paddingBottom:'20px'}}>
        <Tippy content='Basic Tooltip'>
            <button>Hover</button>
        </Tippy>
    </div>
    <div style={{paddingBottom:'20px',color:'orange'}}>
        <Tippy content={<span style={{color:'orange'}}>Colored Orange</span>}>
            <button>Hover</button>
        </Tippy>
    </div>
    </>
  )
}
