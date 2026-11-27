/** A small map with named layers: a floor, two wall lines, a desk, chairs with a shadow, and a room label over the desk. */
export const SMALL_MAP = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
    <style>.wall{fill:none;stroke:#333;stroke-width:4}.shadow{fill:#000;opacity:0.1}</style>
    <g id="base"><rect id="floor" x="0" y="0" width="400" height="200" fill="#eee"/></g>
    <g id="furniture">
        <rect class="shadow" x="102" y="52" width="60" height="30"/>
        <rect id="table-1" x="100" y="50" width="60" height="30" fill="#fff"/>
        <rect id="table-2" x="200" y="50" width="60" height="30" fill="#fff"/>
        <rect id="table-3" x="300" y="50" width="60" height="30" fill="#fff"/>
        <g id="chairs">
            <circle cx="110" cy="95" r="8" fill="#888"/>
            <circle cx="130" cy="95" r="8" fill="#888"/>
            <circle cx="150" cy="95" r="8" fill="#888"/>
            <circle cx="210" cy="95" r="8" fill="#888"/>
        </g>
        <path id="detail" d="M100 60 L160 60" fill="none" stroke="#999" stroke-width="0.5"/>
    </g>
    <g id="bookings">
        <rect id="area-1-status" x="90" y="40" width="180" height="70" fill="#0a0" opacity="0.3"/>
        <path id="glyph" d="M120 60 h10 v10 h-10 z" fill="#111"/>
    </g>
    <g id="skeleton">
        <g id="walls">
            <line class="wall" x1="0" y1="0" x2="400" y2="0"/>
            <polyline class="wall" points="0,0 0,200 400,200"/>
        </g>
    </g>
    <text x="10" y="20">Level 1</text>
</svg>`;

/** A map with no names at all: thin detail lines and four thick lines */
export const UNNAMED_MAP = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
    <rect x="0" y="0" width="300" height="300" fill="#fafafa"/>
    <line x1="10" y1="10" x2="290" y2="10" stroke="#222" stroke-width="5"/>
    <line x1="290" y1="10" x2="290" y2="290" stroke="#222" stroke-width="5"/>
    <line x1="290" y1="290" x2="10" y2="290" stroke="#222" stroke-width="5"/>
    <line x1="10" y1="290" x2="10" y2="10" stroke="#222" stroke-width="5"/>
    <line x1="40" y1="40" x2="140" y2="40" stroke="#999" stroke-width="0.5"/>
    <line x1="40" y1="60" x2="140" y2="60" stroke="#999" stroke-width="0.5"/>
    <line x1="40" y1="80" x2="140" y2="80" stroke="#999" stroke-width="0.5"/>
    <line x1="40" y1="100" x2="140" y2="100" stroke="#999" stroke-width="0.5"/>
    <line x1="40" y1="120" x2="140" y2="120" stroke="#999" stroke-width="0.5"/>
    <line x1="40" y1="140" x2="240" y2="140" stroke="#999" stroke-width="0.5"/>
    <line x1="40" y1="160" x2="240" y2="160" stroke="#999" stroke-width="0.5"/>
    <line x1="40" y1="180" x2="240" y2="180" stroke="#999" stroke-width="0.5"/>
    <line x1="40" y1="200" x2="240" y2="200" stroke="#999" stroke-width="0.5"/>
    <line x1="40" y1="220" x2="240" y2="220" stroke="#999" stroke-width="0.5"/>
</svg>`;
