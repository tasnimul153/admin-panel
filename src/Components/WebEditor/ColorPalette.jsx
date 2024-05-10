import React from 'react';
import './colorpalette.css';

const ColorPalette = ({ cssString, name, isCurrent, onClick }) => {
    const extractColors = (css) => {
        const colorRegex = /#([a-f0-9]{6}|[a-f0-9]{3})|\b(rgb|hsl)a?\([^)]*\)/gi;
        const matches = css.match(colorRegex);
        return [...new Set(matches)]; // Convert Set to Array
    };

    const colors = extractColors(cssString);

    return (
        <div onClick={onClick} style={{
            marginBottom: '20px',
        }}>
            <div className="colorPaletteItem" style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                width: "178px", 
                borderBottom: isCurrent ? "2px solid #000" : "2px solid transparent", 
                boxShadow: isCurrent ? "0px 2px 0px 0px rgba(0, 0, 0, 0.5)" : "none",
                padding: "5px",
                paddingBottom: "20px",
                }}>
                <div className='name'>
                    {name}
                </div>
                {colors.map((color, index) => (
                    <div key={index} style={{
                        width: '25px',
                        height: '20px',
                        backgroundColor: color,
                        margin: '0px',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        flex: '0 0 calc(100% / 6)',
                        justifyContent: 'center',
                        textShadow: '1px 1px 2px #000'
                    }}></div>
                ))}
            </div>
        </div>
    );
};

export default ColorPalette;