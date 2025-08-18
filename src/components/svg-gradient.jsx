function SvgGradient() {
    return (
        <svg width='0' height='0' className="footer__gradient">
            <linearGradient id="gradient" x1='0%' y1='0%' x2='100%' y2='0%'>
                <stop stopColor="#EE0979" offset='0%' />
                <stop stopColor="#F2BC06" offset='100%' />
            </linearGradient>
        </svg>
    );
}

export default SvgGradient;