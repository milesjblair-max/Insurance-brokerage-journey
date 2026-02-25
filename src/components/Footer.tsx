import React from 'react';

const Footer: React.FC<{ theme?: 'dark' | 'light' }> = ({ theme = 'light' }) => {
    const isDark = theme === 'dark';
    return (
        <footer style={{
            padding: '20px 48px',
            borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : '#eee'}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: isDark ? 'transparent' : '#fff',
        }}>
            <span className="t-label" style={{ color: isDark ? 'rgba(255,255,255,0.18)' : '#bbb' }}>
                &copy; {new Date().getFullYear()} Accenture
            </span>
            <span className="t-label" style={{ color: isDark ? 'rgba(255,255,255,0.18)' : '#bbb' }}>
                Confidential &amp; Proprietary
            </span>
        </footer>
    );
};

export default Footer;
